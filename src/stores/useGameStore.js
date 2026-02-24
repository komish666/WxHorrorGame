// src/stores/useGameStore.js
import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    // 核心数值
    currentTime: new Date('2026-02-18T23:30:00'),
    sanValue: 100,
    connections: {
      girlfriend: 80,
      stranger: 50,
      haiming: 50,
      mother: 60
    },

    // 对话状态
    dialogueHistory: {}, // { characterId: [ {speaker, content, type, id} ] }
    currentOptions: [], // { text, target, sanEffect, connEffect }
    isWaitingForChoice: false,
    currentCharacter: null,

    // 最后交互时间（用于错过机制）
    lastInteractions: {},

    // 视觉效果标志
    screenShake: false,
    visualDistortion: 0, // 0-3，对应不同San值区间的视觉扭曲程度
    savedVisualDistortion: null, // <--- 新增此行

    // 游戏状态
    gameStarted: false,
    gameEnded: false,
    endingType: null,
    showEndingModal: false,
    
    // OS文本状态
    osText: {
      text: '',
      visible: false,
      isEnding: false,
      waitingForRestart: false
    },
    
    // 结局收集
    unlockedEndings: JSON.parse(localStorage.getItem('unlockedEndings') || '[]'),
    
    // 回调函数
    onSanChange: null,
    onOsTextEnd: null
  }),

  actions: {
    // 初始化或重置游戏
    resetGame() {
      this.currentTime = new Date('2026-02-18T23:30:00');
      this.sanValue = 100;
      this.connections = {
        girlfriend: 80,
        stranger: 50,
        haiming: 50,
        mother: 60
      };
      this.dialogueHistory = {};
      this.currentOptions = [];
      this.isWaitingForChoice = false;
      this.currentCharacter = null;
      this.lastInteractions = {};
      this.screenShake = false;
      this.visualDistortion = 0;
      this.gameStarted = false;
      this.gameEnded = false;
      this.endingType = null;
      this.osText = {
        text: '',
        visible: false
      };
    },

    // 开始游戏
    startGame() {
      this.gameStarted = true;
      this.updateAllLastInteractions();
    },

    // 结束游戏
    endGame(endingType) {
      this.gameEnded = true;
      this.endingType = endingType;
      this.showEndingModal = true;
      // 解锁结局
      this.unlockEnding(endingType);
    },
    
    // 隐藏结局模态框
    hideEndingModal() {
      this.showEndingModal = false;
    },

    // 推进时间
    advanceTime(seconds) {
      this.currentTime = new Date(this.currentTime.getTime() + seconds * 1000);
      // 检查是否到达游戏结束时间
      if (this.currentTime >= new Date('2026-02-19T00:30:00')) {
        this.endGame('time_up');
      }
    },

    // 修改San值
    changeSan(value) {
      const oldSan = this.sanValue;
      this.sanValue = Math.max(0, Math.min(100, this.sanValue + value));
      this.updateVisualDistortion();
      
      // 触发San值变化回调
      if (this.onSanChange) {
        this.onSanChange(this.sanValue);
      }
    },

    // 修改Connection值
    changeConnection(characterId, value) {
      if (this.connections[characterId] !== undefined) {
        this.connections[characterId] = Math.max(0, Math.min(100, this.connections[characterId] + value));
        // 检查是否关系破裂
        if (this.connections[characterId] < 20) {
          // 关系破裂，不再接收该角色消息
          console.log(`${characterId} 关系破裂`);
        }
      }
    },
    
    // 添加消息到历史记录
    addMessage(characterId, speaker, content, type = 'text') {
      if (!this.dialogueHistory[characterId]) {
        this.dialogueHistory[characterId] = [];
      }
      this.dialogueHistory[characterId].push({
        id: Date.now() + Math.random(),
        speaker,
        content,
        type,
        timestamp: new Date(this.currentTime)
      });
    },

    // 显示选项给玩家
    showOptions(characterId, options) {
      this.currentCharacter = characterId;
      this.currentOptions = options;
      this.isWaitingForChoice = true;
    },

    // 显示OS文本
    showOsText(text, isEnding = false) {
      // 1. 保存当前的视觉扭曲状态
      this.savedVisualDistortion = this.visualDistortion;
      // 2. 临时禁用视觉扭曲效果，确保OS文本正常显示
      this.visualDistortion = 0; 
      
      this.osText.text = text || '';
      this.osText.visible = true;
      this.osText.isEnding = isEnding;
      this.osText.waitingForRestart = false;
    },

    // OS文本完成，等待重新开始
    setWaitingForRestart() {
      this.osText.waitingForRestart = true;
    },

    hideOsText() {
      this.osText.visible = false;
      this.osText.isEnding = false;
      this.osText.waitingForRestart = false;
      
      // 1. 恢复之前保存的视觉扭曲状态
      if (this.savedVisualDistortion !== null) {
        this.visualDistortion = this.savedVisualDistortion;
        this.savedVisualDistortion = null; // 清空保存值
      }
      
      // 触发OS文本结束事件
      if (this.onOsTextEnd) {
        this.onOsTextEnd();
      }
    },
    
    // 设置OS文本结束回调
    setOnOsTextEnd(callback) {
      this.onOsTextEnd = callback;
    },
    
    // 解锁结局
    unlockEnding(endingType) {
      if (!this.unlockedEndings.includes(endingType)) {
        this.unlockedEndings.push(endingType);
        // 实际项目中应该保存到localStorage
        localStorage.setItem('unlockedEndings', JSON.stringify(this.unlockedEndings));
      }
    },
    
    // 检查结局是否已解锁
    isEndingUnlocked(endingType) {
      return this.unlockedEndings.includes(endingType);
    },

    // 玩家做出选择后清除选项
    clearOptions() {
      this.currentOptions = [];
      this.isWaitingForChoice = false;
    },

    // 触发屏幕震动
    triggerScreenShake() {
        this.screenShake = true;
        setTimeout(() => { this.screenShake = false }, 500); // 震动效果持续0.5秒
    },

    // 更新最后交互时间
    updateLastInteraction(characterId) {
      this.lastInteractions[characterId] = new Date(this.currentTime);
    },

    // 初始化所有角色的最后交互时间
    updateAllLastInteractions() {
      const characters = Object.keys(this.connections);
      characters.forEach(charId => {
        this.lastInteractions[charId] = new Date(this.currentTime);
      });
    },

    // 更新视觉扭曲效果
    updateVisualDistortion() {
      if (this.sanValue > 70) {
        this.visualDistortion = 0; // 稳定区
      } else if (this.sanValue > 30) {
        this.visualDistortion = 1; // 波动区
      } else {
        this.visualDistortion = 2; // 崩溃区
        if (this.sanValue < 20) {
          this.visualDistortion = 3; // 我线解锁
        }
      }
    },

    // 检查是否可以进入我线
    canEnterMyLine() {
      return this.sanValue < 20;
    },

    // 获取角色的Connection状态
    getConnectionStatus(characterId) {
      const conn = this.connections[characterId];
      if (conn > 80) return 'high';
      if (conn > 20) return 'medium';
      return 'low';
    }
  },

  getters: {
    getHistory: (state) => (characterId) => state.dialogueHistory[characterId] || [],
    getSanLevel: (state) => {
      if (state.sanValue > 70) return 'stable';
      if (state.sanValue > 30) return 'unstable';
      if (state.sanValue > 20) return 'critical';
      return 'broken';
    },
    getGameTime: (state) => {
      const hours = state.currentTime.getHours().toString().padStart(2, '0');
      const minutes = state.currentTime.getMinutes().toString().padStart(2, '0');
      const seconds = state.currentTime.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  },
});
