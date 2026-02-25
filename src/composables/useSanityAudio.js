import { ref, onUnmounted } from 'vue';

export function useSanityAudio(audioElementRef) {
  let audioCtx = null;
  let source = null;
  let filter = null;
  let panner = null;
  let gainNode = null;
  const isInitialized = ref(false);

  const init = () => {
    if (isInitialized.value || !audioElementRef.value) return;

    // 创建上下文
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // 创建节点
    source = audioCtx.createMediaElementSource(audioElementRef.value);
    filter = audioCtx.createBiquadFilter();
    panner = audioCtx.createStereoPanner();
    gainNode = audioCtx.createGain();

    // 初始设置
    filter.type = 'lowpass';
    filter.frequency.value = 22050;

    // 链式连接: Source -> Filter -> Panner -> Gain -> Destination
    source.connect(filter);
    filter.connect(panner);
    panner.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    isInitialized.value = true;
  };

  const updateDistortion = (sanValue) => {
    if (!isInitialized.value) init();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const intensity = 1 - (sanValue / 100);
    const now = audioCtx.currentTime;

    // 1. 播放速率扭曲 (加入不稳定的抖动)
    const baseRate = 1.0 - (0.75 * Math.pow(intensity, 1.5));
    const wobble = intensity > 0.4 ? Math.sin(Date.now() / 250) * 0.08 * intensity : 0;
    audioElementRef.value.playbackRate = Math.max(0.15, baseRate + wobble);

    // 2. 频谱扭曲 (SAN越低，声音越闷)
    // 使用指数衰减，让最后 20 点 SAN 值感觉完全像在水底
    const cutOffFreq = 20000 * Math.pow(1 - intensity, 2) + 200; 
    filter.frequency.setTargetAtTime(cutOffFreq, now, 0.1);

    // 3. 空间扭曲 (左右摇摆)
    if (intensity > 0.3) {
      const panSpeed = 1000 / (intensity * 5 + 1); // 越疯狂摇摆越快
      const panValue = Math.sin(Date.now() / panSpeed) * intensity;
      panner.pan.setTargetAtTime(panValue, now, 0.1);
    } else {
      panner.pan.setTargetAtTime(0, now, 0.1);
    }

    // 4. 音量不稳定性 (模拟耳鸣和间歇性失聪)
    let volume = 0.6;
    if (intensity > 0.6) {
      const crackle = Math.random() > 0.95 ? 0.2 : 1; // 随机的瞬间音量下降
      volume = (0.6 + Math.sin(Date.now() / 100) * 0.2 * intensity) * crackle;
    }
    gainNode.gain.setTargetAtTime(Math.max(0.05, volume), now, 0.1);
  };

  onUnmounted(() => {
    if (audioCtx) audioCtx.close();
  });

  return { updateDistortion, init };
}
