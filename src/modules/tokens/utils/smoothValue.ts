
export function smoothTransition(current: number, target: number, factor = 0.25) {
  return current + (target - current) * factor;
}
