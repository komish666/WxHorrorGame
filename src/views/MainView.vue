<!-- src/views/MainView.vue -->
<template>
  <!-- 1. 状态栏 -->
  <StatusBar />

  <!-- 2. 主页头 -->
  <header class="main-header">
    <h1>微信(2673)</h1>
    <div class="actions">
      <img src="../assets/icons/search.png" alt="search">
      <img src="../assets/icons/addNew.png" alt="add">
    </div>
  </header>
  
  <main class="main-content">

    <!-- 4. 聊天列表 -->
    <div class="chat-list">
      <ChatItem 
        v-for="contact in contacts" 
        :key="contact.id"
        :avatar="contact.avatar"
        :name="contact.name"
        :lastMessage="contact.lastMessage"
        :time="contact.time"
        :unread="contact.unread"
        @click="goToChat(contact.id)"
      />
    </div>
  </main>
  
  <!-- 5. 底部导航栏 -->
  <TabBar />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import StatusBar from '../components/StatusBar.vue';
import TabBar from '../components/TabBar.vue';
import ChatItem from '../components/ChatItem.vue';

const router = useRouter();

import horseAvatar from '../assets/avator/horseAvator.svg';

// 模拟联系人数据
const contacts = ref([
  { id: 1, name: '武汉兔咖.樱舞花园', avatar: 'https://img.tukuppt.com/photo-big/00/00/84/6152bc0ce69c3355.jpg', lastMessage: '快乐', time: '昨天', unread: 0 },
  { id: 2, name: '唐新杰', avatar: 'https://pic.616pic.com/ys_b_img/00/39/33/n8xurG4gN1.jpg', lastMessage: '[转账] 已被接收', time: '周五', unread: 0 },
  { id: 3, name: 'QQ邮箱提醒', avatar: 'https://img.icons8.com/fluency/96/new-post.png', lastMessage: 'reg: 验证码832533', time: '下午3:57', unread: 4 },
  { id: 4, name: '何浩', avatar: horseAvatar, lastMessage: '谢谢了啊，也祝你和家人新年快乐...', time: '下午2:12', unread: 0 },
]);

// 跳转到聊天页面
const goToChat = (contactId) => {
  router.push(`/chat/${contactId}`);
};
</script>

<style scoped>
/* 主页面专属样式 */
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: var(--bg-color);
    flex-shrink: 0;
}
.main-header h1 {
    font-size: 20px;
    margin: 0;
    font-weight: bold;
}
.main-header .actions img {
    height: 22px;
    margin-left: 20px;
    cursor: pointer;
}
.main-content {
  flex-grow: 1;
  overflow-y: auto;
  background-color: var(--primary-bg);
}
.login-banner {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #f7f7f7;
    border-bottom: 1px solid var(--divider-color);
}
.login-banner img { height: 20px; margin-right: 15px; }
.chat-list {
  padding: 0;
  margin: 0;
}
</style>
