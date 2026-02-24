<!-- src/App.vue -->
<template>
  <div id="game-container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// 路由配置在main.js中
</script>

<style>
/* body 的全局样式现在已经移到了 style.css */
/* 这里只保留 App.vue 这个组件自身需要的样式 */
#game-container {
  width: 375px;
  height: 812px;
  background-color: #ededed; /* 这是聊天界面的浅灰色背景 */
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  /* 确保子视图能正确填充 */
  display: flex;
  flex-direction: column;
}

/* 路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

