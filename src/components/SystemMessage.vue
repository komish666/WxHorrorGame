<!-- src/components/SystemMessage.vue -->
<template>
  <div class="system-message-wrapper">
    <span class="system-text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.system-message-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 10px;
}
.system-text {
  background-color: #dadada;
  color: #ffffff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
