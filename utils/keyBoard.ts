/**
 * @param {{
 *   code?: string || string[];
 *   keyCode?: number || number[];
 *   key?: string || string[];
 * }} config
 */
const isKey = (config: { [s: string]: unknown; } | ArrayLike<unknown>) => (e: { [x: string]: unknown; }) => {
  for (const [key, value] of Object.entries(config)) {
    if (Array.isArray(value)) {
      if (value.includes(e[key])) return true;
    } else {
      if (e[key] === value) return true;
    }
  }
  return false;
};

/**
 * 是否是回车按键
 * @param {Event} e 触发事件对象
 * @returns
 */
export function isEnter(e: { code: string; keyCode: number; }) {
  return e.code
    ? e.code === "Enter" || e.code === "NumpadEnter"
    : e.keyCode === 13;
}

export function isDown(e: { code: string; keyCode: number; }) {
  return e.code ? e.code === "ArrowDown" : e.keyCode === 40;
}

export function isUp(e: { code: string; keyCode: number; }) {
  return e.code ? e.code === "ArrowUp" : e.keyCode === 38;
}

export const isBackspace = isKey({ code: "Backspace", keyCode: 8 });

export const isSpace = isKey({ code: "Space", keyCode: 32 });

export const isEsc = isKey({ code: "Escape", keyCode: 27 });
