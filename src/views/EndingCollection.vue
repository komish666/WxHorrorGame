<template>
  <div class="ending-collection">
    <div class="header">
      <div class="back-button" @click="goBack">
        <img src="../assets/icons/back.png" alt="返回">
      </div>
      <h1>结局收录</h1>
    </div>
    <main class="collection-content">
      <div v-if="!gameStore.unlockedEndings || gameStore.unlockedEndings.length === 0" class="empty-state">
        <div class="empty-icon">🔒</div>
        <h3>尚未解锁任何结局</h3>
        <p>继续游戏，探索不同的选择，解锁更多结局吧！</p>
      </div>
      <div v-else class="ending-list">
        <div v-for="item in endingList" :key="item.id" class="ending-item">
          <div class="ending-icon">📖</div>
          <div class="ending-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </main>
    <TabBar />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '../stores/useGameStore';
import TabBar from '../components/TabBar.vue';

const router = useRouter();
const gameStore = useGameStore();

// 定义结局数据
const allEndings = [
  {
    id: 'good',
    title: '好结局：如常的黎明',
    description: '你成功地扮演了"过去的我"，用稳健和理智安抚了她，将所有异常都隔绝在她感知之外。她错过了陌生人绝望的警告，父母的短暂失联也被解释为一场误会。这个新年夜的危机似乎过去了。然而，楼下的阴影只是暂时退去，那个偏执的凝视，将在下一个黑夜，以更近的距离，重新包裹她。你为她守护了一个虚假的黎明。'
  },
  {
    id: 'normal',
    title: '普通结局：未知的敲门声',
    description: '你的选择充满了矛盾，既没能给她足够的安全感，又激起了她无尽的恐惧。父母的失联、陌生人的警告、你的突然冷漠，一切都将她推向崩溃的边缘。你选择抽身离开，将她独自留在被未知包裹的房间里。几分钟后，她的房门被敲响了。她不知道门外是谁。是来"保护"你的我？是来警示她的陌生人？还是......终于从房间里出来的"父母"？这个新年，她将永远活在无尽的猜测和恐惧之中。'
  },
  {
    id: 'true',
    title: '真结局：我的金丝雀',
    description: '你遵从了被替换后的本能，用最偏执的方式回应了她的依赖和你的爱。你强迫她打开了陌生人最后的警告，并用言语将其歪曲为无稽之谈，彻底切断了她与外界的联系。当门锁转动的那一刻，她才明白，楼下的陌生人、电话里的爱人、和即将进入她房间的"你"，是同一个存在。至于她的父母……或许他们从一开始就不在，或许他们再也不会醒来。从这个新年开始，她将成为你一个人的金丝雀，被囚禁在由你亲手打造的、名为"爱"的牢笼里，永远无法逃离。你们，终于"永远在一起"了。'
  }
];

// 已解锁的结局列表
const endingList = computed(() => {
  const unlocked = gameStore.unlockedEndings || [];
  return allEndings.filter(ending => unlocked.includes(ending.id));
});

// 返回主页面
const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.ending-collection {
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

.collection-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}

.ending-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ending-item {
  display: flex;
  gap: 16px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.ending-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.ending-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.ending-info {
  flex-grow: 1;
}

.ending-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #333;
}

.ending-info p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #666;
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