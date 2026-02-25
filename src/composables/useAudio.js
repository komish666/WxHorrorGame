import { ref } from 'vue';
import bgmAudioFile from '../audio/bgm.mp3';
import messageSendAudioFile from '../audio/messageSend.mp3';
import keyboardAudioFile from '../audio/keyboard.mp3';

const bgmAudio = ref(null);
const messageSendAudio = ref(null);
const keyboardAudio = ref(null);
const isBgmPlaying = ref(false);
let previousSanValue = 100;

const initAudio = () => {
  bgmAudio.value = new Audio(bgmAudioFile);
  bgmAudio.value.loop = true;
  bgmAudio.value.volume = 0.5;
  
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
    isBgmPlaying.value = true;
    bgmAudio.value.play().catch(() => {});
  }
};

const stopBgm = () => {
  if (bgmAudio.value && isBgmPlaying.value) {
    isBgmPlaying.value = false;
    bgmAudio.value.pause();
  }
};

const updateBgmBasedOnSan = (sanValue) => {
  if (!bgmAudio.value) return;

  // 将 SAN 值从 [0, 100] 映射到 [1, 0] 的不安感强度（intensity）
  const intensity = 1 - (sanValue / 100); // sanValue 为 0 时，intensity 为 1；sanValue 为 100 时，intensity 为 0

  // 1. 播放速率 (Playback Rate) - 核心扭曲感来源
  // 使用平方 (Math.pow(intensity, 2)) 让低 SAN 值的影响更剧烈
  // 正常 SAN 值 (intensity=0)，速率为 1.0 (正常)
  // 极低 SAN 值 (intensity=1)，速率为 0.2 (非常慢，扭曲)
  const playbackRate = 1.0 - (0.8 * Math.pow(intensity, 1.5)); // 范围从 1.0 降低到 0.2
  bgmAudio.value.playbackRate = playbackRate;

  // 2. 音量 (Volume) - 忽大忽小的感觉
  // 让音量在 SAN 值降低时不是一直变小，而是在一个范围内波动，或者只在极低时才减弱
  // 这里我们让它在 SAN 值低时反而稍微变响一点，模拟紧张感，但在最低时又减弱，模拟失聪感
  let volume;
  if (sanValue > 30) {
    volume = 0.5; // 正常状态
  } else {
    // 模拟心跳或紧张感，音量在 0.4 到 0.7 之间抖动
    // 这里的 Math.sin 可以制造一种周期性的波动感，让玩家不安
    const volumeFluctuation = Math.sin(Date.now() / 500) * 0.15; // 每半秒波动一次，范围 -0.15 到 +0.15
    volume = 0.55 + volumeFluctuation; // 基础音量 0.55，波动后为 [0.4, 0.7]
  }
  bgmAudio.value.volume = Math.max(0.1, Math.min(volume, 0.8)); // 限制音量在安全范围

  console.log('BGM updated:', { sanValue, intensity, playbackRate, volume: bgmAudio.value.volume });
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