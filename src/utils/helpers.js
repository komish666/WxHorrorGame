/**
 * 格式化日期对象为 HH:mm 格式的字符串。
 * @param {Date} date - 日期对象。
 * @returns {string} 格式化后的时间字符串，例如 "23:40"。
 */
export function formatTime(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return '00:00';
  }
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 强制使用24小时制
  });
}

/**
 * 从对象数组中根据 id 查找特定对象。
 * @param {Array<Object>} array - 要搜索的数组。
 * @param {string|number} id - 要查找的对象的 id。
 * @returns {Object|null} 找到的对象或 null。
 */
export function findById(array, id) {
  return array.find(item => item.id === id) || null;
}

/**
 * 延迟执行函数。
 * @param {number} ms - 延迟的毫秒数。
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 在一个范围内生成一个随机整数。
 * @param {number} min - 范围的最小值（包含）。
 * @param {number} max - 范围的最大值（包含）。
 * @returns {number} 随机整数。
 */
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 动态加载资源。对于Vite，更推荐使用`import.meta.glob`，
 * 但这个函数可以作为备用或用于特定场景。
 * @param {string} path - 资源相对于/src/assets/的路径
 * @returns {string} 解析后的资源URL
 */
export function getAssetUrl(path) {
    // 这是一个 Vite 特定的辅助函数，用于在JS中正确引用assets下的资源
    // 示例用法: getAssetUrl('characters/girlfriend/avatar.png')
    return new URL(`/src/assets/${path}`, import.meta.url).href;
}

