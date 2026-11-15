import { describe, test, expect } from 'vitest';
import { createAnswer, validateGuess, judge } from './logic.js';

describe('createAnswer', () => {
  test('乱数が 0 のとき 1 になる', () => {
    expect(createAnswer(0)).toBe(1);
  });

  test('乱数が 1 に近いとき 100 になる', () => {
    expect(createAnswer(0.9999)).toBe(100);
  });

  test('乱数が 0.5 のとき 51 になる', () => {
    expect(createAnswer(0.5)).toBe(51);
  });

  test('引数を省略しても 1〜100 の整数になる', () => {
    const answer = createAnswer();
    expect(Number.isInteger(answer)).toBe(true);
    expect(answer).toBeGreaterThanOrEqual(1);
    expect(answer).toBeLessThanOrEqual(100);
  });
});

describe('validateGuess', () => {
  test('境目の 1 と 100 は OK', () => {
    expect(validateGuess('1')).toEqual({ ok: true, value: 1 });
    expect(validateGuess('100')).toEqual({ ok: true, value: 100 });
  });

  test('範囲の外の 0 と 101 はエラー', () => {
    expect(validateGuess('0')).toEqual({ ok: false, error: 'out-of-range' });
    expect(validateGuess('101')).toEqual({ ok: false, error: 'out-of-range' });
  });

  test('空の入力と空白だけの入力はエラー', () => {
    expect(validateGuess('')).toEqual({ ok: false, error: 'empty' });
    expect(validateGuess('   ')).toEqual({ ok: false, error: 'empty' });
  });

  test('文字の入力はエラー', () => {
    expect(validateGuess('abc')).toEqual({ ok: false, error: 'not-number' });
  });

  test('小数の入力はエラー', () => {
    expect(validateGuess('3.5')).toEqual({ ok: false, error: 'not-integer' });
  });

  test('前後の空白は無視する', () => {
    expect(validateGuess(' 42 ')).toEqual({ ok: true, value: 42 });
  });
});

describe('judge', () => {
  test('予想が答えより小さいとき higher', () => {
    expect(judge(30, 50)).toBe('higher');
  });

  test('予想が答えより大きいとき lower', () => {
    expect(judge(70, 50)).toBe('lower');
  });

  test('予想と答えが同じとき correct', () => {
    expect(judge(50, 50)).toBe('correct');
  });
});
