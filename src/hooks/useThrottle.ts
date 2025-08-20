import { useCallback, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const lastCall = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Keep callback reference up to date
  callbackRef.current = callback;

  const throttledFunction = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callbackRef.current(...args);
      } else {
        timeoutRef.current = setTimeout(
          () => {
            lastCall.current = Date.now();
            callbackRef.current(...args);
          },
          delay - (now - lastCall.current)
        );
      }
    },
    [delay]
  );

  return throttledFunction as T;
};
