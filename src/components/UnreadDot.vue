<!-- src/components/UnreadDot.vue -->
<template>
  <span class="unread-dot"></span>
</template>

<style scoped>
.unread-dot {
  position: absolute;
  top: -2px;
  right: -5px;
  width: 10px;
  height: 10px;
  background-color: #fa5151; /* 微信红 */
  border-radius: 50%;
  border: 1px solid #f7f7f7; /* 与背景色相同的边框，产生“浮空”效果 */
}
</style>
