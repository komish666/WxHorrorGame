<template>
  <div class="contacts-view">
    <div class="header">
      <div class="back-button" @click="goBack">
        <img src="../assets/icons/back.png" alt="返回">
      </div>
      <h1>发现</h1>
    </div>
    <main class="contacts-content">
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>发现页面</h3>
        <p>这里是发现页面，暂时没有内容</p>
      </div>
    </main>
    <TabBar />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TabBar from '../components/TabBar.vue';

const router = useRouter();

// 返回主页面
const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.contacts-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.back-button {
  margin-right: 20px;
  cursor: pointer;
}

.back-button img {
  width: 20px;
  height: 20px;
}

.header h1 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.contacts-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 空状态样式 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #666;
}

.empty-state p {
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
}

TabBar {
  flex-shrink: 0;
}
</style>