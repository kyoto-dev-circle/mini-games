import { describe, test, expect } from 'vitest';
import { add } from './sample.js';

describe('add', () => {
  test('1 と 2 を足すと 3 になる', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('負の数どうしを足せる', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('0 を足しても値は変わらない', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('小数の足し算は toBeCloseTo で比べる', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
