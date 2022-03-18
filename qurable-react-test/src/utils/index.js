
export function debounce(fn, delay = 300) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(fn, args);
    }, delay);
  };
}
