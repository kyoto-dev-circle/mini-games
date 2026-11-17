// 数当ての画面の処理
// ルールの判定は logic.js の関数を使い、ここでは表示と操作だけを書く
import { MIN, MAX, createAnswer, validateGuess, judge } from './logic.js';

// 画面の部品を取り出しておく
const ruleText = document.querySelector('#rule');
const form = document.querySelector('#guess-form');
const input = document.querySelector('#guess-input');
const guessButton = document.querySelector('#guess-button');
const messageText = document.querySelector('#message');
const countText = document.querySelector('#count');
const result = document.querySelector('#result');
const resultText = document.querySelector('#result-text');
const retryButton = document.querySelector('#retry-button');

// logic.js が返す種類を、画面に出す日本語に変える表
const ERROR_MESSAGES = {
  empty: '数を入力してください。',
  'not-number': '数字で入力してください。',
  'not-integer': '整数で入力してください。',
  'out-of-range': `${MIN}〜${MAX} の数を入力してください。`,
};
const HINT_MESSAGES = {
  higher: 'もっと大きいです。',
  lower: 'もっと小さいです。',
};

// 状態（ゲームの進み具合）
let answer = 0;
let count = 0;
let message = '';
let finished = false;

// 状態のとおりに画面を書き換える
function render() {
  messageText.textContent = message;
  countText.textContent = count;
  input.disabled = finished;
  guessButton.disabled = finished;
  result.hidden = !finished;
  resultText.textContent = `正解！ ${count} 回で当たりました。`;
}

// ゲームを最初から始める
function start() {
  answer = createAnswer();
  count = 0;
  message = '';
  finished = false;
  input.value = '';
  render();
  input.focus();
}

// 「予想する」ボタンか Enter キーで送られたとき
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const checked = validateGuess(input.value);
  if (!checked.ok) {
    message = ERROR_MESSAGES[checked.error];
    render();
    return;
  }

  count += 1;
  const hint = judge(checked.value, answer);
  if (hint === 'correct') {
    finished = true;
    message = '';
  } else {
    message = `${checked.value}：${HINT_MESSAGES[hint]}`;
  }
  input.value = '';
  render();

  if (finished) {
    retryButton.focus();
  } else {
    input.focus();
  }
});

retryButton.addEventListener('click', start);

ruleText.textContent = `${MIN}〜${MAX} の数を当ててください。`;
start();
