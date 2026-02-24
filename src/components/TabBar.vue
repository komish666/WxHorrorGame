<!-- src/components/TabBar.vue -->
<template>
  <div class="tab-bar">
    <router-link to="/" class="tab-item" active-class="active">
      <img src="../assets/icons/contacts.png" alt="聊天" class="icon">
      <span class="label">微信</span>
    </router-link>
    <router-link to="/contacts" class="tab-item" active-class="active">
      <img src="../assets/icons/discover.png" alt="发现" class="icon">
      <span class="label">发现</span>
    </router-link>
    <router-link to="/endings" class="tab-item" active-class="active">
      <img src="../assets/icons/me.png" alt="我" class="icon">
      <span class="label">我</span>
    </router-link>
  </div>
</template>

<script setup>
// 这个组件暂时不需要 JS 逻辑
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  background-color: white;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 8px 25px;
  border-radius: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.tab-item:hover {
  background-color: #f5f5f5;
}

.tab-item.active {
  background-color: rgba(7, 193, 96, 0.1);
}

.tab-item .icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  filter: grayscale(100%) brightness(0.7);
}

.tab-item.active .icon {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
}

.tab-item .label {
  font-size: 12px;
  font-weight: 500;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  color: #999;
  transition: all 0.3s ease;
}

.tab-item.active .label {
  color: #07C160;
}
</style>