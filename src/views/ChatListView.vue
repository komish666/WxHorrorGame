<template>
  <div class="chat-list-container">
    <div class="header">
      <h1>微信</h1>
      <div class="header-buttons">
        <img src="../assets/icons/search.png" alt="搜索">
        <img src="../assets/icons/addNew.png" alt="添加">
      </div>
    </div>
    <div class="chat-list">
      <div 
        v-for="character in characters" 
        :key="character.id" 
        @click="openConversation(character.id)"
        class="chat-item"
        :class="{ 
          'high-conn': gameStore.connections[character.id] > 80, 
          'low-conn': gameStore.connections[character.id] < 20 
        }"
      >
        <div class="avatar">
          <img :src="character.avatar" :alt="character.name">
          <div class="conn-indicator" :class="getConnClass(character.id)"></div>
        </div>
        <div class="chat-info">
          <div class="chat-header">
            <h3 class="name">{{ character.name }}</h3>
            <span class="time">{{ getLastMessageTime(character.id) }}</span>
          </div>
          <div class="last-message">
            <span class="message">{{ getLastMessage(character.id) }}</span>
          </div>
        </div>
        <div class="notification-area">
          <span class="unread-dot" v-if="hasUnreadMessages(character.id)"></span>
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '../stores/useGameStore';
import TabBar from '../components/TabBar.vue';

// 导入角色profile
import girlfriendProfile from '../assets/characters/girlfriend/profile.json';

// 导入工具函数
import { getAssetUrl } from '../utils/helpers';

const router = useRouter();
const gameStore = useGameStore();

// 角色配置 - 只保留女友
const characters = ref([
  {
    id: 'girlfriend',
    name: '女友',
    avatar: getAssetUrl('characters/girlfriend/avatar.png')
  }
]);

function openConversation(characterId) {
  router.push(`/conversation/${characterId}`);
}

function getLastMessage(characterId) {
  const messages = gameStore.getHistory(characterId);
  if (messages.length > 0) {
    const lastMsg = messages[messages.length - 1];
    return lastMsg.content.length > 20 ? lastMsg.content.substring(0, 20) + '...' : lastMsg.content;
  }
  return '暂无消息';
}

function getLastMessageTime(characterId) {
  const messages = gameStore.getHistory(characterId);
  if (messages.length > 0) {
    const lastMsg = messages[messages.length - 1];
    const time = lastMsg.timestamp;
    return `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
  }
  return '';
}

function hasUnreadMessages(characterId) {
  // 简单实现，后续可以在gameStore中添加未读消息状态
  return false;
}

function getConnClass(characterId) {
  const conn = gameStore.connections[characterId];
  if (conn > 80) return 'high';
  if (conn > 20) return 'medium';
  return 'low';
}
</script>

<style scoped>
.chat-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header h1 {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  color: #333;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.header-buttons {
  display: flex;
  gap: 20px;
}

.header-buttons img {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.header-buttons img:hover {
  transform: scale(1.1);
}

.chat-list {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px 0;
}

/* 滚动条样式 */
.chat-list::-webkit-scrollbar {
  width: 6px;
}

.chat-list::-webkit-scrollbar-track {
  background: transparent;
}

.chat-list::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 3px;
}

.chat-list::-webkit-scrollbar-thumb:hover {
  background: #c0c0c0;
}

.chat-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  margin: 0 10px 10px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.chat-item:hover {
  background-color: #f9f9f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chat-item.high-conn {
  background-color: rgba(76, 175, 80, 0.08);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.chat-item.low-conn {
  background-color: rgba(244, 67, 54, 0.08);
  border: 1px solid rgba(244, 67, 54, 0.2);
  opacity: 0.9;
}

.avatar {
  position: relative;
  margin-right: 16px;
}

.avatar img {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  object-fit: cover;
  border: 2px solid #f0f0f0;
  transition: all 0.3s ease;
}

.chat-item:hover .avatar img {
  border-color: #07C160;
}

.conn-indicator {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.conn-indicator.high {
  background-color: #4CAF50;
  animation: pulse 2s infinite;
}

.conn-indicator.medium {
  background-color: #FFC107;
}

.conn-indicator.low {
  background-color: #F44336;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.chat-info {
  flex-grow: 1;
  min-width: 0;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.name {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.time {
  font-size: 12px;
  color: #999;
  font-weight: 400;
}

.last-message {
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.notification-area {
  margin-left: 15px;
  display: flex;
  align-items: center;
}

.unread-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #FF3B30;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
</style>
