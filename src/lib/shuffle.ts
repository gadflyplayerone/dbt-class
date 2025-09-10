export function shuffleInPlace<T>(arr: T[], seed?: number): T[] {
  // Fisher-Yates with optional seed for determinism if desired
  let i = arr.length - 1;
  let rng = seed
    ? (() => { let s = seed; return () => (s = (s * 9301 + 49297) % 233280) / 233280; })()
    : Math.random;
  while (i > 0) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i--;
  }
  return arr;
}