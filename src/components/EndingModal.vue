<template>
  <div class="ending-modal-overlay" v-if="visible">
    <div class="ending-modal">
      <div class="ending-content">
        <h2 class="ending-title">{{ endingTitle }}</h2>
        <div class="ending-description">{{ endingDescription }}</div>
      </div>
      <div class="ending-actions">
        <button class="restart-button" @click="handleRestart">重新开始</button>
        <button class="back-to-main-button" @click="handleBackToMain">返回主页面</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '../stores/useGameStore';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  endingType: {
    type: String,
    default: null
  }
});

const router = useRouter();
const gameStore = useGameStore();

// 结局数据
const endings = {
  good: {
    title: '好结局：如常的黎明',
    description: '你成功地扮演了"过去的我"，用稳健和理智安抚了她，将所有异常都隔绝在她感知之外。她错过了陌生人绝望的警告，父母的短暂失联也被解释为一场误会。这个新年夜的危机似乎过去了。然而，楼下的阴影只是暂时退去，那个偏执的凝视，将在下一个黑夜，以更近的距离，重新包裹她。你为她守护了一个虚假的黎明。'
  },
  normal: {
    title: '普通结局：未知的敲门声',
    description: '你的选择充满了矛盾，既没能给她足够的安全感，又激起了她无尽的恐惧。父母的失联、陌生人的警告、你的突然冷漠，一切都将她推向崩溃的边缘。你选择抽身离开，将她独自留在被未知包裹的房间里。几分钟后，她的房门被敲响了。她不知道门外是谁。是来"保护"你的我？是来警示她的陌生人？还是......终于从房间里出来的"父母"？这个新年，她将永远活在无尽的猜测和恐惧之中。'
  },
  true: {
    title: '真结局：我的金丝雀',
    description: '你遵从了被替换后的本能，用最偏执的方式回应了她的依赖和你的爱。你强迫她打开了陌生人最后的警告，并用言语将其歪曲为无稽之谈，彻底切断了她与外界的联系。当门锁转动的那一刻，她才明白，楼下的陌生人、电话里的爱人、和即将进入她房间的"你"，是同一个存在。至于她的父母……或许他们从一开始就不在，或许他们再也不会醒来。从这个新年开始，她将成为你一个人的金丝雀，被囚禁在由你亲手打造的、名为"爱"的牢笼里，永远无法逃离。你们，终于"永远在一起"了。'
  }
};

const endingTitle = computed(() => {
  if (!props.endingType || !endings[props.endingType]) {
    return '结局';
  }
  return endings[props.endingType].title;
});

const endingDescription = computed(() => {
  if (!props.endingType || !endings[props.endingType]) {
    return '游戏结束';
  }
  return endings[props.endingType].description;
});

const handleRestart = () => {
  gameStore.resetGame();
  gameStore.startGame();
  router.push('/');
};

const handleBackToMain = () => {
  router.push('/');
};
</script>

<style scoped>
.ending-modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.ending-modal {
  background-color: white;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: modalAppear 0.5s ease-out;
}

.ending-content {
  padding: 30px;
  text-align: center;
}

.ending-title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.3;
}

.ending-description {
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;
}

.ending-actions {
  display: flex;
  border-top: 1px solid #e0e0e0;
}

.ending-actions button {
  flex: 1;
  padding: 16px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.restart-button {
  background-color: #4CAF50;
  color: white;
  border-right: 1px solid #e0e0e0;
}

.restart-button:hover {
  background-color: #45a049;
  transform: scale(1.02);
}

.back-to-main-button {
  background-color: #f5f5f5;
  color: #333;
}

.back-to-main-button:hover {
  background-color: #e0e0e0;
  transform: scale(1.02);
}

@keyframes modalAppear {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* 滚动条样式 */
.ending-description::-webkit-scrollbar {
  width: 6px;
}

.ending-description::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.ending-description::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.ending-description::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>