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
  
  // 无论sanValue是增加还是减少，都更新背景音乐
  const intensity = Math.max(sanValue / 100, 0); // 当sanValue越低，intensity越低
  const playbackRate = 0.1 + (intensity * 0.5); // 当sanValue越低，playbackRate越低（音乐越扭曲），范围从0.3到1.0
  const volume = 0.1 + (intensity * 0.4); // 当sanValue越低，volume越小，范围从0.1到0.5
  
  bgmAudio.value.playbackRate = playbackRate;
  bgmAudio.value.volume = volume;
  
  console.log('BGM updated:', { sanValue, playbackRate, volume });
  
  previousSanValue = sanValue;
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