// src/core/DialogueParser.js

export function parseDialogueScript(scriptText) {
  const lines = scriptText.split('\n').map(line => line.trim());
  const dialogueTree = {};
  let currentBlockLabel = null;
  let currentOptions = [];
  let optionJumpMap = {};
  let optionEffectsMap = {};

  const labelRegex = /^\$(.*?)\$/;
  const commandRegex = /<(.*?)>/;
  const dialogueRegex = /^(.*?): (.*)$/;
  const optionRegex = /^(\d+)\. (.*)$/;
  const optionJumpRegex = /^\/\/ 选项(\d+) -> 跳转至 \$(.*?)\$$/;
  const optionEffectRegex = /^\/\/ 选项(\d+) 效果: (.*)$/;
  const osTextRegex = /^<OS_Text>\s*(.*?)\s*<\/OS_Text>$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.startsWith('// ---')) continue;

    // 1. 匹配区块标签 e.g., $23:30$
    const labelMatch = line.match(labelRegex);
    if (labelMatch) {
      // 如果当前有未处理的选项块，先处理掉
      if (currentOptions.length > 0 && currentBlockLabel) {
        dialogueTree[currentBlockLabel].push({
          type: 'OPTIONS',
          choices: currentOptions.map(opt => ({
            text: opt.text,
            target: optionJumpMap[opt.index],
            ...optionEffectsMap[opt.index]
          }))
        });
        currentOptions = [];
        optionJumpMap = {};
        optionEffectsMap = {};
      }
      
      currentBlockLabel = labelMatch[1];
      dialogueTree[currentBlockLabel] = [];
      continue;
    }

    if (!currentBlockLabel) continue;

    // 2. 优先匹配OS_Text指令
    const osTextMatch = line.match(osTextRegex);
    if (osTextMatch) {
      dialogueTree[currentBlockLabel].push({ 
        type: 'COMMAND', 
        command: 'OS_Text', 
        args: [osTextMatch[1]] 
      });
      continue;
    }

    // 3. 匹配其他指令标签 e.g., <TimeFlow: +10s>
    const commandMatch = line.match(commandRegex);
    if (commandMatch) {
      const [command, ...args] = commandMatch[1].split(':').map(s => s.trim());
      dialogueTree[currentBlockLabel].push({ type: 'COMMAND', command, args });
      continue;
    }

    // 4. 匹配选项块开始
    if (line === '[options]:') {
      currentOptions = [];
      optionJumpMap = {};
      optionEffectsMap = {};
      continue;
    }
    
    // 5. 匹配选项内容
    const optionMatch = line.match(optionRegex);
    if (optionMatch) {
      currentOptions.push({ index: optionMatch[1], text: optionMatch[2] });
      continue;
    }

    // 6. 匹配选项跳转指令
    const optionJumpMatch = line.match(optionJumpRegex);
    if (optionJumpMatch) {
      const [, optionIndex, targetLabel] = optionJumpMatch;
      optionJumpMap[optionIndex] = targetLabel;
      continue;
    }

    // 7. 匹配选项效果指令
    const optionEffectMatch = line.match(optionEffectRegex);
    if (optionEffectMatch) {
      const [, optionIndex, effectStr] = optionEffectMatch;
      const effects = {};
      
      // 解析效果字符串，格式如 "SanEffect: -5, ConnEffect: +10"
      const effectPairs = effectStr.split(',').map(s => s.trim());
      effectPairs.forEach(pair => {
        const [key, value] = pair.split(':').map(s => s.trim());
        if (key === 'SanEffect') {
          effects.sanEffect = parseInt(value);
        } else if (key === 'ConnEffect') {
          effects.connEffect = parseInt(value);
        }
      });
      
      optionEffectsMap[optionIndex] = effects;
      continue;
    }
    
    // 8. 匹配特殊指令
    if (line.includes('<SanCheck>') || line.includes('</SanCheck>') || 
        line.includes('<条件检测>') || line.includes('</条件检测>') || 
        line.includes('<条件1:') || line.includes('<条件2:') || 
        line.includes('条件1:') || line.includes('条件2:')) {
      // 暂时跳过这些特殊指令，后续可以添加处理逻辑
      continue;
    }
    
    // 9. 匹配对话 e.g., 女友: 你好
    const dialogueMatch = line.match(dialogueRegex);
    if (dialogueMatch) {
      const [, speaker, content] = dialogueMatch;
      dialogueTree[currentBlockLabel].push({ type: 'DIALOGUE', speaker, content });
      continue;
    }

    // 10. 匹配普通跳转
    if (line.startsWith('// -> 跳转至')) {
      const targetMatch = line.match(/\$(.*?)\$/);
      if (targetMatch) {
        const target = targetMatch[1];
        dialogueTree[currentBlockLabel].push({ type: 'JUMP', target });
      }
    }
  }
  
  // 文件结束时，如果还有未处理的选项块，也处理掉
  if (currentOptions.length > 0 && currentBlockLabel) {
    dialogueTree[currentBlockLabel].push({
      type: 'OPTIONS',
      choices: currentOptions.map(opt => ({
        text: opt.text,
        target: optionJumpMap[opt.index],
        ...optionEffectsMap[opt.index]
      }))
    });
  }
  
  return dialogueTree;
}