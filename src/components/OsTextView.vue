<template>
  <div class="os-text-container" v-if="visible" @click="handleClick">
    <div class="os-text-content">
      {{ displayedText }}
      <span class="cursor" v-if="isTyping">|</span>
    </div>
    <div v-if="!isTyping && waitingForRestart" class="restart-button" @click="handleRestart">
      重新开始
    </div>
    <div v-else-if="!isTyping && !isEnding" class="continue-hint">
      点击继续
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted, onMounted, nextTick } from 'vue';
import { useAudio } from '../composables/useAudio';
import { useRouter } from 'vue-router';
import { useGameStore } from '../stores/useGameStore';

const { playKeyboardSound } = useAudio();
const router = useRouter();
const gameStore = useGameStore();

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  visible: {
    type: Boolean,
    default: false
  },
  isEnding: {
    type: Boolean,
    default: false
  },
  waitingForRestart: {
    type: Boolean,
    default: false
  }
});

const displayedText = ref('');
const isTyping = ref(false);
let typingInterval = null;
let currentTextVersion = 0;

const startTyping = () => {
  currentTextVersion++;
  const version = currentTextVersion;
  
  console.log('OsTextView: startTyping()被调用, text:', props.text, 'version:', version);
  
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
  
  displayedText.value = '';
  isTyping.value = true;
  
  if (!props.text || props.text.trim() === '') {
    console.log('OsTextView: text为空或undefined');
    isTyping.value = false;
    if (props.isEnding) {
      gameStore.setWaitingForRestart();
    }
    return;
  }
  
  let index = 0;
  typingInterval = setInterval(() => {
    if (version !== currentTextVersion) {
      clearInterval(typingInterval);
      typingInterval = null;
      return;
    }
    
    if (index < props.text.length) {
      displayedText.value += props.text[index];
      playKeyboardSound();
      index++;
    } else {
      if (typingInterval && version === currentTextVersion) {
        clearInterval(typingInterval);
        typingInterval = null;
      }
      isTyping.value = false;
      console.log('OsTextView: 打字完成');
      if (props.isEnding) {
        gameStore.setWaitingForRestart();
      }
    }
  }, 50);
};

const handleRestart = () => {
  gameStore.hideOsText();
  gameStore.resetGame();
  router.push('/');
};

const handleClick = () => {
  if (!isTyping.value && !props.waitingForRestart && !props.isEnding) {
    gameStore.hideOsText();
  }
};

onMounted(() => {
  console.log('OsTextView: 组件已挂载');
});

watch(() => props.visible, (newValue) => {
  console.log('OsTextView: visible变化为:', newValue);
  if (newValue) {
    nextTick(() => {
      startTyping();
    });
  } else {
    if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = null;
    }
    isTyping.value = false;
    displayedText.value = '';
  }
});

watch(() => props.text, (newValue) => {
  console.log('OsTextView: text变化为:', newValue);
  if (props.visible) {
    nextTick(() => {
      startTyping();
    });
  }
});

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
});
</script>

<style scoped>
.os-text-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.os-text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 80%;
  line-height: 1.5;
}

.restart-button {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50;
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.restart-button:hover {
  transform: translate(-50%, -50%) scale(1.05);
  background-color: #45a049;
}

.restart-button:active {
  transform: translate(-50%, -50%) scale(0.98);
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* 继续提示样式 */
.continue-hint {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-style: italic;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>