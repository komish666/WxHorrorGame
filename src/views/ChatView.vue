<!-- src/views/ChatView.vue -->
<template>
  <div class="chat-container" v-if="contact">
    <!-- 1. 聊天页头部 -->
    <header class="chat-header">
      <router-link to="/" class="back-btn">&lt;</router-link>
      <span class="title">{{ contact.name }}</span>
      <span class="more-btn">...</span>
    </header>

    <!-- 2. 聊天消息 -->
    <main class="chat-messages">
      <template v-for="(msg, index) in messages" :key="index">
        <div v-if="msg.type === 'timestamp'" class="timestamp">{{ msg.content }}</div>
        <MessageBubble v-else :message="msg" :avatar="msg.sender === 'me' ? myAvatar : contact.avatar" />
      </template>
    </main>

    <!-- 3. 聊天输入栏 -->
    <footer class="chat-input-area">
      <img src="../assets/icons/lang.png" alt="voice">
      <input type="text" placeholder="发消息...">
      <img src="../assets/icons/smile.png" alt="emoji">
      <img src="../assets/icons/addNew.png" alt="add">
    </footer>
  </div>
  <div v-else>正在加载...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MessageBubble from '../components/MessageBubble.vue';

const route = useRoute();
const contact = ref(null);
const messages = ref([]);

const myAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XJ1Z_A-g4s4yP6AhsALEJV7AbC3N3at9xg&s';

// 模拟从API获取数据
const fetchChatData = (contactId) => {
  // 在真实项目中，这里会是一个API请求
  const allContacts = {
    '4': {
      name: '何浩',
      avatar: '../assets/avator/horseAvator.svg',
    }
    // ...可以添加其他联系人的数据
  };
  const allMessages = {
    '4': [
      { type: 'message', sender: 'other', content: '今天那个停车费，谢谢你帮付' },
      { type: 'timestamp', content: '上午10:16' },
      { type: 'message', sender: 'me', content: '浩哥，新年快乐！' },
      { type: 'timestamp', content: '下午2:12' },
      { type: 'message', sender: 'other', content: '谢谢了啊，也祝你和家人新年快乐，万事如意马年行大运🎉🎉' },
    ]
    // ...其他联系人的消息
  };

  contact.value = allContacts[contactId] || { name: '未知联系人', avatar: '' };
  messages.value = allMessages[contactId] || [];
};

onMounted(() => {
  const contactId = route.params.id;
  fetchChatData(contactId);
});

</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--bg-color);
}
.chat-header {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #f7f7f7;
    border-bottom: 1px solid var(--divider-color);
    flex-shrink: 0;
}
.chat-header .back-btn {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
}
.chat-header .title {
    font-size: 18px;
    font-weight: bold;
    flex-grow: 1;
}
.chat-header .more-btn {
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
}
.chat-messages {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px 15px;
}
.timestamp {
    text-align: center;
    color: var(--text-secondary);
    font-size: 12px;
    margin: 10px 0 20px;
}
.chat-input-area {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background-color: #f7f7f7;
    border-top: 1px solid var(--divider-color);
    flex-shrink: 0;
}
.chat-input-area img {
    height: 30px;
    cursor: pointer;
    margin: 0 5px;
}
.chat-input-area input[type="text"] {
    flex-grow: 1;
    border: none;
    background-color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 16px;
    margin: 0 5px;
}
.chat-input-area input[type="text"]:focus {
    outline: none;
}
</style>
