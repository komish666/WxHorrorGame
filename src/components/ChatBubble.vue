<!-- src/components/ChatBubble.vue -->
<template>
  <!-- 整个组件用一个div包起来，方便添加时间戳 -->
  <div class="message-container" :class="{ 'sent-by-me': sentByMe }">
    <div class="bubble-wrapper" :class="{ 'sent-by-me': sentByMe }">
      <!-- 对方消息：先显示头像，再显示内容 -->
      <template v-if="!sentByMe">
        <img :src="avatar" class="avatar" alt="avatar" />
        <div class="bubble-content">
          <div v-if="message.type === 'text'" class="text-content">
            {{ message.content }}
          </div>
          <div v-if="message.type === 'image'" class="image-content">
            <img :src="message.src" alt="image content" class="message-image" />
          </div>
          <div v-if="message.type === 'emoji'" class="emoji-content">
            <img :src="message.src" alt="emoji" class="message-emoji" />
          </div>
        </div>
      </template>
      <!-- 我的消息：先显示内容，再显示头像 -->
      <template v-else>
        <div class="bubble-content">
          <div v-if="message.type === 'text'" class="text-content">
            {{ message.content }}
          </div>
          <div v-if="message.type === 'image'" class="image-content">
            <img :src="message.src" alt="image content" class="message-image" />
          </div>
          <div v-if="message.type === 'emoji'" class="emoji-content">
            <img :src="message.src" alt="emoji" class="message-emoji" />
          </div>
        </div>
        <img :src="avatar" class="avatar" alt="avatar" />
      </template>
    </div>
    
    <!-- 【新增】时间戳显示 -->
    <!-- 注意：这个时间戳在气泡外部，并且只在需要时显示 -->
    <div v-if="showTimestamp" class="timestamp">
      {{ formattedTimestamp }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  characterProfiles: {
    type: Object,
    required: true,
  },
  // 【新增】接收一个 prop 来决定是否显示时间戳
  showTimestamp: {
    type: Boolean,
    default: false,
  }
});

const sentByMe = computed(() => props.message.speaker === '我' || props.message.speaker === 'me');

const avatar = computed(() => {
  const speakerProfile = props.characterProfiles[props.message.speaker];
  return speakerProfile ? speakerProfile.avatar : '/assets/characters/default_avatar.png';
});

// 【新增】计算属性，用于格式化时间戳
const formattedTimestamp = computed(() => {
  if (!props.message.timestamp) return '';
  const date = new Date(props.message.timestamp);
  // 使用 toLocaleTimeString 只显示小时和分钟，例如 "23:40"
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit',
    hour12: false // 使用24小时制
  });
});
</script>

<style scoped>
/* 【新增】顶层容器样式 */
.message-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

/* 对方消息容器 */
.message-container:not(.sent-by-me) {
  align-items: flex-start;
}

/* 我的消息容器 */
.message-container.sent-by-me {
  align-items: flex-end;
}

/* 对方消息 */
.bubble-wrapper:not(.sent-by-me) {
  display: flex;
  align-items: flex-start;
  max-width: 70%;
}

/* 我的消息 */
.bubble-wrapper.sent-by-me {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 70%;
}

/* 【新增】时间戳样式 */
.timestamp {
  font-size: 12px;
  color: #b2b2b2;
  margin-top: 4px;
  margin-bottom: 4px;
  align-self: center;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

/* 对方头像居左 */
.bubble-wrapper:not(.sent-by-me) .avatar {
  margin-right: 8px;
}

/* 我的头像居右 */
.bubble-wrapper.sent-by-me .avatar {
  margin-left: 8px;
}

.bubble-content {
  max-width: calc(100% - 44px);
  padding: 10px 14px;
  border-radius: 18px;
  word-wrap: break-word;
}

/* 我的消息气泡 */
.bubble-wrapper.sent-by-me {
  flex-direction: row;
}

.bubble-wrapper.sent-by-me .bubble-content {
  background-color: #07C160;
  color: white;
  border-bottom-right-radius: 4px;
}

/* 对方消息气泡 */
.bubble-wrapper:not(.sent-by-me) .bubble-content {
  background-color: white;
  color: #333;
  border-bottom-left-radius: 4px;
}
</style>
