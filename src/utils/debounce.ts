export function debounce<F extends (...args: any[]) => void>(
  func: F,
  debounceMs: number
): F & { cancel: () => void } {
  let timeoutId: number | NodeJS.Timeout | null = null;

  const debounced = function (...args: Parameters<F>) {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, debounceMs);
  } as F & { cancel: () => void };

  debounced.cancel = function () {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
  };

  return debounced;
}
