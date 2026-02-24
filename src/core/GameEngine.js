// src/core/GameEngine.js
import { useGameStore } from '../stores/useGameStore';
import { parseDialogueScript } from './DialogueParser';

export class GameEngine {
  constructor() {
    this.gameStore = useGameStore();
    this.dialogueTrees = {}; // 每个角色的对话树
    this.characterStates = {}; // 为每个角色保存状态
    this.messageHandlers = {};
    this.missedCheckIntervals = {};
  }

  async loadAndStart(characterId, scriptText, startBlockLabel = '23:30') {
    // 如果对话历史不为空，不重新开始对话
    if (this.gameStore.dialogueHistory[characterId] && this.gameStore.dialogueHistory[characterId].length > 0) {
      console.log(`GameEngine: ${characterId} 已有对话历史，跳过重新开始`);
      return;
    }
    
    this.dialogueTrees[characterId] = parseDialogueScript(scriptText);
    this.characterStates[characterId] = {
      currentBlock: null,
      instructionPointer: 0
    };
    await this.jumpToBlock(characterId, startBlockLabel);
    await this.processQueue(characterId);
    this.startMissedCheck(characterId);
  }

  jumpToBlock(characterId, label) {
    if (this.dialogueTrees[characterId] && this.dialogueTrees[characterId][label]) {
      if (!this.characterStates[characterId]) {
        this.characterStates[characterId] = {
          currentBlock: null,
          instructionPointer: 0
        };
      }
      this.characterStates[characterId].currentBlock = this.dialogueTrees[characterId][label];
      this.characterStates[characterId].instructionPointer = 0;
    } else {
      console.error(`错误：找不到对话块 [${label}] 或角色 [${characterId}]`);
    }
  }

  async processQueue(characterId) {
    if (this.gameStore.isWaitingForChoice) return; // 等待玩家选择

    const dialogueTree = this.dialogueTrees[characterId];
    const characterState = this.characterStates[characterId];
    if (!dialogueTree || !characterState || !characterState.currentBlock) return;

    while (characterState.instructionPointer < characterState.currentBlock.length) {
      const currentIndex = characterState.instructionPointer;
      const instruction = characterState.currentBlock[currentIndex];
      
      // 先检查是否需要暂停
      if (instruction.type === 'COMMAND' && instruction.command === 'OS_Text') {
        // 处理OS_Text指令
        this.executeCommand(characterId, instruction.command, instruction.args);
        // 不增加指针，等待OS_Text结束后再继续
        return;
      }
      
      // 检查是否是结局指令
      if (instruction.type === 'COMMAND' && instruction.command === 'Ending') {
        // 处理Ending指令
        this.executeCommand(characterId, instruction.command, instruction.args);
        // 结束处理，不再继续
        return;
      }
      
      // 处理其他指令
      characterState.instructionPointer++;
      const shouldContinue = await this.executeInstruction(characterId, instruction);
      if (!shouldContinue) break; // 遇到需要暂停的指令（如选项）
    }
  }

  async executeInstruction(characterId, instruction) {
    switch (instruction.type) {
      case 'DIALOGUE':
        this.gameStore.addMessage(characterId, instruction.speaker, instruction.content);
        this.gameStore.advanceTime(10); // 每条消息+10秒
        await this.delay(1000); // 模拟打字/思考时间
        return true; // 继续执行下一条

      case 'COMMAND':
        this.executeCommand(characterId, instruction.command, instruction.args);
        return true; // 继续执行下一条

      case 'OPTIONS':
        this.gameStore.showOptions(characterId, instruction.choices);
        return false; // 暂停执行，等待玩家选择

      case 'JUMP':
        await this.jumpToBlock(characterId, instruction.target);
        await this.processQueue(characterId); // 跳转后立刻开始处理新块
        return false; // 停止处理当前块
    }
    return true;
  }

  executeCommand(characterId, command, args) {
    switch (command) {
      case 'TimeFlow':
        this.gameStore.advanceTime(parseInt(args[0].replace('s', '')));
        break;
      case 'SanEffect':
        this.gameStore.changeSan(parseInt(args[0]));
        break;
      case 'ConnEffect':
        this.gameStore.changeConnection(characterId, parseInt(args[0]));
        break;
      case 'ScreenShake':
        this.gameStore.triggerScreenShake();
        break;
      case 'SetCharacter':
        this.currentCharacter = args[0];
        break;
      case 'OS_Text':
        console.log('OS_Text被调用，内容:', args[0]);
        this.gameStore.showOsText(args[0]);
        break;
      case 'Ending':
        console.log('Ending被调用，类型:', args[0]);
        this.gameStore.endGame(args[0]);
        break;
      // ...其他指令
    }
  }

  async selectOption(characterId, option) {
    if (!this.gameStore.isWaitingForChoice) return;
    
    this.gameStore.clearOptions();
    this.gameStore.updateLastInteraction(characterId);

    // 处理选项效果
    if (option.sanEffect) {
      this.gameStore.changeSan(option.sanEffect);
    }
    if (option.connEffect) {
      this.gameStore.changeConnection(characterId, option.connEffect);
    }

    // 延迟一下，然后跳转
    setTimeout(() => {
        if (option.target) {
            this.jumpToBlock(characterId, option.target);
        }
        this.processQueue(characterId);
    }, 500);
  }

  startMissedCheck(characterId) {
    this.missedCheckIntervals[characterId] = setInterval(() => {
      const lastInteraction = this.gameStore.lastInteractions[characterId];
      if (!lastInteraction) return;

      const currentTime = this.gameStore.currentTime;
      const timeDiff = (currentTime - lastInteraction) / 1000 / 60; // 转换为分钟

      if (timeDiff >= 5) {
        // 触发错过机制
        this.gameStore.changeConnection(characterId, -8); // Connection -8
        this.gameStore.changeSan(-3); // San -3
        this.gameStore.updateLastInteraction(characterId); // 重置计时
      }
    }, 10000); // 每10秒检查一次
  }

  stopMissedCheck(characterId) {
    if (this.missedCheckIntervals[characterId]) {
      clearInterval(this.missedCheckIntervals[characterId]);
      delete this.missedCheckIntervals[characterId];
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
