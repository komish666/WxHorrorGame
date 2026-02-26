<!-- src/views/ConversationView.vue -->
<template>
  <div class="conversation-view" :class="{
    shake: gameStore.screenShake
  }">
    <div class="header">
      <div class="back-button" @click="goBack">
        <img src="../assets/icons/back.png" alt="返回">
      </div>
      {{ currentCharacterName }}
    </div>
    <div class="message-list" ref="messageList">
      <div v-for="message in history" :key="message.id">
        <SystemMessage v-if="message.type === 'system'" :text="message.content" />
        <ChatBubble v-else :message="message" :characterProfiles="profiles" />
      </div>
    </div>
    <div class="options-panel" v-if="gameStore.isWaitingForChoice">
      <OptionButton
        v-for="option in gameStore.currentOptions"
        :key="option.text"
        :text="option.text"
        @select="handleOptionSelect(option)"
      />
    </div>
    
    <!-- OS文本显示组件 -->
    <OsTextView 
      :text="gameStore.osText.text" 
      :visible="gameStore.osText.visible"
      :isEnding="gameStore.osText.isEnding"
      :waitingForRestart="gameStore.osText.waitingForRestart"
    />
    
    <!-- 结局模态框 -->
    <EndingModal 
      :visible="gameStore.showEndingModal"
      :endingType="gameStore.endingType"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGameStore } from '../stores/useGameStore';
import { GameEngine } from '../core/GameEngine';
import OsTextView from '../components/OsTextView.vue';
import EndingModal from '../components/EndingModal.vue';
import { useAudio } from '../composables/useAudio';

// 导入对话脚本
import girlfriendScript from '../data/dialogues/girlfriend.txt?raw';
import strangerScript from '../data/dialogues/stranger.txt?raw';
import haimingScript from '../data/dialogues/haiming.txt?raw';
import motherScript from '../data/dialogues/mother.txt?raw';

// 导入角色profile
import girlfriendProfile from '../assets/characters/girlfriend/profile.json';
import strangerProfile from '../assets/characters/stranger/profile.json';
import haimingProfile from '../assets/characters/haiming/profile.json';
import motherProfile from '../assets/characters/mother/profile.json';
import meProfile from '../assets/characters/me/profile.json';

// 导入角色头像
import girlfriendAvatar from '../assets/characters/girlfriend/avatar.png';
import meAvatar from '../assets/characters/me/avatar.png';
import strangerAvatar from '../assets/characters/stranger/avatar.png';
import haimingAvatar from '../assets/characters/haiming/avatar.png';
import motherAvatar from '../assets/characters/mother/avatar.png';

// 导入你的组件
import ChatBubble from '../components/ChatBubble.vue';
import SystemMessage from '../components/SystemMessage.vue';
import OptionButton from '../components/OptionButton.vue';

const route = useRoute();
const router = useRouter();
const gameStore = useGameStore();
const gameEngine = new GameEngine();
const { initAudio, playMessageSendSound, startBgm, stopBgm, updateBgmBasedOnSan } = useAudio();

const messageList = ref(null);
const currentCharacterId = ref('girlfriend');

// 角色配置
// 角色profile对象，用于传递给ChatBubble组件
const characterProfiles = {
  girlfriend: girlfriendProfile,
  stranger: strangerProfile,
  haiming: haimingProfile,
  mother: motherProfile,
  me: meProfile
};

const characterConfigs = {
  girlfriend: {
    name: '女友',
    script: girlfriendScript,
    avatar: girlfriendProfile.avatar
  },
  stranger: {
    name: '陌生人',
    script: strangerScript,
    avatar: strangerProfile.avatar
  },
  haiming: {
    name: '海明',
    script: haimingScript,
    avatar: haimingProfile.avatar
  },
  mother: {
    name: '母亲',
    script: motherScript,
    avatar: motherProfile.avatar
  }
};

const currentCharacterName = computed(() => {
  return characterConfigs[currentCharacterId.value]?.name || '未知角色';
});

const history = computed(() => {
  return gameStore.getHistory(currentCharacterId.value);
});

const profiles = ref({
  '女友': { name: '女友', avatar: girlfriendAvatar },
  '陌生人': { name: '陌生人', avatar: strangerAvatar },
  '海明': { name: '海明', avatar: haimingAvatar },
  '母亲': { name: '母亲', avatar: motherAvatar },
  '我': { name: '我', avatar: meAvatar }
});

onMounted(() => {
  const charId = route.params.id || 'girlfriend';
  currentCharacterId.value = charId;
  
  initAudio();
  startBgm();
  
  // 只有在游戏未开始或对话历史为空时才开始新游戏
  if (!gameStore.gameStarted || !gameStore.dialogueHistory[charId]) {
    gameStore.startGame();
  }
  
  gameStore.onSanChange = (sanValue) => {
    updateBgmBasedOnSan(sanValue);
  };
  
  const config = characterConfigs[charId];
  if (config && config.script) {
    // 只有在对话历史为空时才加载并开始对话
    if (!gameStore.dialogueHistory[charId] || gameStore.dialogueHistory[charId].length === 0) {
      gameEngine.loadAndStart(charId, config.script);
    }
  }
  
  // 进入页面后自动滚动到最新对话位置
  nextTick(() => {
    scrollToBottom();
  });
  
  // 设置OS文本结束回调，继续处理对话
  gameStore.setOnOsTextEnd(() => {
    // 增加指令指针
    if (gameEngine.characterStates[charId]) {
      gameEngine.characterStates[charId].instructionPointer++;
    }
    // 继续处理队列
    gameEngine.processQueue(charId);
  });
});

const handleOptionSelect = (option) => {
  gameEngine.selectOption(currentCharacterId.value, option);
};

const goBack = () => {
  router.push('/');
};

// 滚动到对话底部
const scrollToBottom = () => {
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  }
};

// 自动滚动到底部
let previousHistoryLength = 0;
watch(history, (newHistory) => {
  nextTick(() => {
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight;
    }
  });
  
  if (newHistory.length > previousHistoryLength) {
    const latestMessage = newHistory[newHistory.length - 1];
    if (latestMessage && latestMessage.type !== 'os_text') {
      playMessageSendSound();
    }
  }
  previousHistoryLength = newHistory.length;
}, { deep: true });

// 监听选项面板显示状态，自动滚动到底部
watch(() => gameStore.isWaitingForChoice, (isWaiting) => {
  nextTick(() => {
    if (messageList.value) {
      messageList.value.scrollTop = messageList.value.scrollHeight;
    }
  });
});
</script>

<style scoped>
.conversation-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #EDEDED;
  position: relative;
  overflow: hidden;
}

.header {
  height: 44px;
  background-color: #F7F7F7;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  color: #000;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-left: 16px;
}

.back-button {
  margin-right: 20px;
  cursor: pointer;
}

.back-button img {
  width: 20px;
  height: 20px;
}

/* 微信风格的时间显示样式 */
.time-divider {
  text-align: center;
  margin: 12px 0;
  font-size: 12px;
  color: #999;
  position: relative;
}

.time-divider::before,
.time-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background-color: #E5E5E5;
}

.time-divider::before {
  left: 0;
}

.time-divider::after {
  right: 0;
}

.message-list {
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #EDEDED;
}

/* 滚动条样式 */
.message-list::-webkit-scrollbar {
  width: 6px;
}

.message-list::-webkit-scrollbar-track {
  background: transparent;
}

.message-list::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.message-list::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

.options-panel {
  background-color: white;
  padding: 16px;
  border-top: 1px solid #E5E5E5;
  flex-shrink: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.05);
  max-height: 30vh;
  overflow-y: auto;
}

/* 震动效果 */
@keyframes shake-animation {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.shake {
  animation: shake-animation 0.5s;
}
</style>
