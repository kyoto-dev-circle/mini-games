// 数当てのルール
// 画面の処理（document や window）は書かず、入力を受け取って結果を返すだけにする

export const MIN = 1;
export const MAX = 100;

// 答え（MIN〜MAX の整数）を決める
// random には 0 以上 1 未満の数を渡す。省略すると Math.random() を使う
export function createAnswer(random = Math.random()) {
  return Math.floor(random * (MAX - MIN + 1)) + MIN;
}

// 入力された文字列をチェックする
// OK なら { ok: true, value: 数 }、だめなら { ok: false, error: 理由 } を返す
export function validateGuess(text) {
  const trimmed = text.trim();
  if (trimmed === '') {
    return { ok: false, error: 'empty' };
  }

  const value = Number(trimmed);
  if (Number.isNaN(value)) {
    return { ok: false, error: 'not-number' };
  }
  if (!Number.isInteger(value)) {
    return { ok: false, error: 'not-integer' };
  }
  if (value < MIN || value > MAX) {
    return { ok: false, error: 'out-of-range' };
  }

  return { ok: true, value };
}

// 予想と答えを比べる
// 答えのほうが大きければ 'higher'、小さければ 'lower'、同じなら 'correct'
export function judge(guess, answer) {
  if (guess < answer) {
    return 'higher';
  }
  if (guess > answer) {
    return 'lower';
  }
  return 'correct';
}
