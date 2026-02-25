import { ref } from 'vue';
import bgmAudioFile from '../audio/bgm.mp3';
import messageSendAudioFile from '../audio/messageSend.mp3';
import keyboardAudioFile from '../audio/keyboard.mp3';

const bgmAudio = ref(null);
const messageSendAudio = ref(null);
const keyboardAudio = ref(null);
const isBgmPlaying = ref(false);

// Web Audio API 相关变量
let audioCtx = null;
let source = null;
let filter = null;
let panner = null;
let gainNode = null;
let isAudioContextInitialized = false;

const initAudio = () => {
  // 初始化原始 Audio 对象
  bgmAudio.value = new Audio(bgmAudioFile);
  bgmAudio.value.loop = true;
  bgmAudio.value.volume = 0.5;
  bgmAudio.value.crossOrigin = "anonymous"; // 防止跨域导致的 API 无法控制

  messageSendAudio.value = new Audio(messageSendAudioFile);
  messageSendAudio.value.volume = 0.5;

  keyboardAudio.value = new Audio(keyboardAudioFile);
  keyboardAudio.value.volume = 0.3;

  bgmAudio.value.addEventListener('ended', () => {
    if (isBgmPlaying.value) {
      bgmAudio.value.play().catch(() => {});
    }
  });
};

// 初始化 Web Audio 节点链
const initWebAudioContext = () => {
  if (isAudioContextInitialized) return;
  
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // 将原有的 bgmAudio 接入 Web Audio API
  source = audioCtx.createMediaElementSource(bgmAudio.value);
  
  filter = audioCtx.createBiquadFilter();
  panner = audioCtx.createStereoPanner();
  gainNode = audioCtx.createGain();

  // 链接节点: Source -> Filter -> Panner -> Gain -> Destination
  source.connect(filter);
  filter.connect(panner);
  panner.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  isAudioContextInitialized = true;
};

const playMessageSendSound = () => {
  if (messageSendAudio.value) {
    messageSendAudio.value.currentTime = 0;
    messageSendAudio.value.play().catch(() => {});
  }
};

const playKeyboardSound = () => {
  if (keyboardAudio.value) {
    keyboardAudio.value.currentTime = 0;
    keyboardAudio.value.play().catch(() => {});
  }
};

const startBgm = () => {
  if (bgmAudio.value && !isBgmPlaying.value) {
    // 首次播放时初始化上下文
    initWebAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    isBgmPlaying.value = true;
    bgmAudio.value.play().catch(() => {});
    
    // 启动持续刷新扭曲效果的循环（解决 Math.sin 需要随时间变化的问题）
    requestAnimationFrame(applyContinuousEffects);
  }
};

const stopBgm = () => {
  if (bgmAudio.value && isBgmPlaying.value) {
    isBgmPlaying.value = false;
    bgmAudio.value.pause();
  }
};

// 存储当前的 SAN 值，供循环调用
let currentSanValue = 100;

const updateBgmBasedOnSan = (sanValue) => {
  currentSanValue = sanValue;
};

// 持续应用扭曲效果的逻辑（加重扭曲感的核心）
const applyContinuousEffects = () => {
  if (!isBgmPlaying.value || !isAudioContextInitialized) return;

  const intensity = 1 - (currentSanValue / 100);
  const now = audioCtx.currentTime;

  // 1. 极度扭曲的播放速率 (Playback Rate)
  // 加入 Wow/Flutter (音准不稳) 效果
  const baseRate = 1.0 - (0.7 * Math.pow(intensity, 1.5)); // 基础降速
  const wobble = intensity > 0.3 ? Math.sin(Date.now() / 200) * 0.08 * intensity : 0;
  bgmAudio.value.playbackRate = Math.max(0.1, baseRate + wobble);

  // 2. 频谱过滤 (Filter) - 营造压抑感
  // SAN值越低，声音越闷，就像溺水或耳鸣
  const cutOffFreq = 20000 * Math.pow(1 - intensity, 2) + 100;
  filter.frequency.setTargetAtTime(cutOffFreq, now, 0.1);

  // 3. 空间摇摆 (Panning) - 营造眩晕感
  // 低于 50 SAN，声音开始在左右耳之间缓慢无规律平移
  if (intensity > 0.5) {
    const panValue = Math.sin(Date.now() / 800) * intensity;
    panner.pan.setTargetAtTime(panValue, now, 0.1);
  } else {
    panner.pan.setTargetAtTime(0, now, 0.1);
  }

  // 4. 音量波动与瞬间失聪感
  let targetVolume = 0.6;
  if (intensity > 0.7) {
    // 模拟心脏跳动的音量起伏
    const heartBeat = Math.sin(Date.now() / 150) * 0.2 * intensity;
    // 随机的断片/干扰感
    const noise = Math.random() > 0.98 ? 0.1 : 1.0;
    targetVolume = (0.5 + heartBeat) * noise;
  }
  gainNode.gain.setTargetAtTime(targetVolume, now, 0.1);

  // 继续循环
  requestAnimationFrame(applyContinuousEffects);
};

export function useAudio() {
  return {
    initAudio,
    playMessageSendSound,
    playKeyboardSound,
    startBgm,
    stopBgm,
    updateBgmBasedOnSan,
    isBgmPlaying
  };
}
