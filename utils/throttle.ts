/**
 * 在 wait 秒内最多执行 func 一次的函数
 * @param fn
 * @param wait 需要节流的时间间隔
 * @param option [options.leading=true] (boolean): 指定调用在节流开始前。
 * [options.trailing=true] (boolean): 指定调用在节流结束后。
 * @returns
 */
export function throttle<T extends (...args: any) => any>(
  fn: T,
  wait: number,
  option: {
    leading?: boolean;
    trailing?: boolean;
  } = {
    leading: true,
    trailing: true
  }
) {
  let previous: number|null = null;
  const context = this;
  let timer = null;
  let latestArgs = { current: null };

  return function (...args: Parameters<T>) {
    const now = new Date().getTime();

    // 立即执行
    if (option.leading) {
      if (!previous || now - previous >= wait) {
        previous = now;
        return fn.apply(context, args);
      }
      return;
    }

    // 延迟执行
    if (option.trailing) {
      latestArgs.current = args;
      if (!previous || now - previous >= wait) {
        previous = now;

        timer = setTimeout(() => {
          previous = null;
          fn.apply(context, latestArgs.current);
        }, wait);
      }
    }

    return function cancel() {
      clearTimeout(timer);
    }
  };
}
