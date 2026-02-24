// src/main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css'; // 你可以创建一个基础的样式文件

// 导入视图组件
import ChatListView from './views/ChatListView.vue';
import ConversationView from './views/ConversationView.vue';
import EndingCollection from './views/EndingCollection.vue';
import ContactsView from './views/ContactsView.vue';

const app = createApp(App);
const pinia = createPinia();

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ChatList',
      component: ChatListView
    },
    {
      path: '/conversation/:id',
      name: 'Conversation',
      component: ConversationView,
      props: true
    },
    {
      path: '/endings',
      name: 'EndingCollection',
      component: EndingCollection
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsView
    }
  ]
});

app.use(pinia);
app.use(router);
app.mount('#app');
