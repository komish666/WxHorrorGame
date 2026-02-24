<!-- src/components/OptionButton.vue -->
<template>
  <button class="option-button" @click="$emit('select')">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  }
});
defineEmits(['select']);
</script>

<style scoped>
.option-button {
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: white;
  border: 2px solid #f0f0f0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
  font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.option-button:hover {
  background-color: #f9f9f9;
  border-color: #07C160;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(7, 193, 96, 0.15);
}

.option-button:active {
  background-color: #07C160;
  color: white;
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(7, 193, 96, 0.3);
}

.option-button::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  vertical-align: middle;
  background-color: #f0f0f0;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.option-button:hover::before {
  background-color: #07C160;
  transform: scale(1.1);
}

.option-button:active::before {
  background-color: white;
}
</style>