import { throttle } from '../../utils/throttle';

describe('throttle', () => {
  jest.useFakeTimers();

  it('should call the function immediately if leading is true', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100, { leading: true, trailing: false });

    // Call the function immediately
    throttledFn();
    expect(fn).toHaveBeenCalledTimes(1);

    // Call the function again before the wait period is over
    throttledFn();
    expect(fn).toHaveBeenCalledTimes(1);

    // Advance time by 50ms
    jest.advanceTimersByTime(50);

    // Call the function again before the wait period is over
    throttledFn();
    expect(fn).toHaveBeenCalledTimes(1);

    // Advance time by another 50ms
    jest.advanceTimersByTime(50);

    // Call the function again after the wait period is over
    throttledFn();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should call the function with the latest arguments if trailing is true', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100, { leading: false, trailing: true });

    // Call the function immediately
    throttledFn(1);
    expect(fn).toHaveBeenCalledTimes(0);

    // Call the function again before the wait period is over
    throttledFn(2);
    expect(fn).toHaveBeenCalledTimes(0);

    // Advance time by 50ms
    jest.advanceTimersByTime(50);

    // Call the function again before the wait period is over
    throttledFn(3);
    expect(fn).toHaveBeenCalledTimes(0);

    // Advance time by another 50ms
    throttledFn(4);
    jest.advanceTimersByTime(50);

    // Call the function again after the wait period is over
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(4);
  });

  it('should call the function with the latest arguments if both leading and trailing are true', () => {
    const fn = jest.fn();
    const throttledFn = throttle(fn, 100, { leading: true, trailing: true });

    // Call the function immediately
    throttledFn(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1);

    // Call the function again before the wait period is over
    throttledFn(2);
    expect(fn).toHaveBeenCalledTimes(1);

    // Advance time by 50ms
    jest.advanceTimersByTime(50);

    // Call the function again before the wait period is over
    throttledFn(3);
    expect(fn).toHaveBeenCalledTimes(1);

    // Advance time by another 50ms
    jest.advanceTimersByTime(50);

    // Call the function again after the wait period is over
    throttledFn(4);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(4);
  });
});