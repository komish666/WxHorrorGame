<template>
  <header class="status-bar">
    <span class="time">4:01</span>
    <div class="icons">
      <img src="../assets/icons/signal.png" alt="signal">
      <img src="../assets/icons/wifi.png" alt="wifi">
      <img src="https://img.icons8.com/ios-filled/50/000000/full-battery.png" alt="battery">
    </div>
  </header>
</template>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 500;
  background-color: var(--primary-bg);
  flex-shrink: 0;
}
.status-bar .time { font-weight: bold; }
.status-bar .icons img { height: 14px; margin-left: 5px; vertical-align: middle; }
</style>
