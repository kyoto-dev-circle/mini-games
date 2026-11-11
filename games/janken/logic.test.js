import { judge, com, win_st } from './logic.js';
import { describe, test, expect } from 'vitest';

describe('judge', () => {
  test('rock vs rock', () => {
    expect(judge('rock', 'rock')).toBe(0);
  });
  test('rock vs scissors', () => {
    expect(judge('rock', 'scissors')).toBe(1);
  });
  test('rock vs paper', () => {
    expect(judge('rock', 'paper')).toBe(2);
  });

  test('scissors vs rock', () => {
    expect(judge('scissors', 'rock')).toBe(2);
  });
  test('scissors vs scissors', () => {
    expect(judge('scissors', 'scissors')).toBe(0);
  });
  test('scissors vs paper', () => {
    expect(judge('scissors', 'paper')).toBe(1);
  });

  test('paper vs rock', () => {
    expect(judge('paper', 'rock')).toBe(1);
  });
  test('paper vs scissors', () => {
    expect(judge('paper', 'scissors')).toBe(2);
  });
  test('paper vs paper', () => {
    expect(judge('paper', 'paper')).toBe(0);
  });
});

describe('com', () => {
  test('コンピュータの手が、数字に対応しているか', () => {
    expect(com(0)).toBe('rock');
    expect(com(1)).toBe('scissors');
    expect(com(2)).toBe('paper');
  });

  test('引数なしなら、3つの手のどれかを返す', () => {
    expect(['rock', 'scissors', 'paper']).toContain(com());
  });
});

describe('win_st', () => {
  test('連勝記録(あいこ)', () => {
    expect(win_st(5, 0)).toBe(5);
  });

  test('連勝記録(勝ち)', () => {
    expect(win_st(2, 1)).toBe(3);
  });

  test('連勝記録(負け)', () => {
    expect(win_st(2, 2)).toBe(0);
  });
});
