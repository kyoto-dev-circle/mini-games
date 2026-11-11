//0-あいこ、1-勝ち、2-負け
//勝ち負けを判定 judge:(プレイヤーの手(文字列),コンピューターの手(文字列))->結果(整数)
//コンピュータの手 com: (手(整数)(テスト用、省略可))->手(文字列)
//連勝数 win_st:(それまでの連勝数(整数),結果(整数))->新しい連勝数(整数)

//勝ち負けを判定する関数
export const judge = (hand_p, hand_c) => {
  if (hand_p === hand_c) {
    return 0;
  } else if (hand_p === 'rock') {
    if (hand_c === 'scissors') {
      return 1;
    } else {
      return 2;
    }
  } else if (hand_p === 'scissors') {
    if (hand_c === 'rock') {
      return 2;
    } else {
      return 1;
    }
  } else if (hand_p === 'paper') {
    if (hand_c === 'rock') {
      return 1;
    } else {
      return 2;
    }
  }
};

//コンピューターの手を生成する関数
export const com = (a) => {
  let h;
  if (a === undefined) {
    h = Math.floor(Math.random() * 3);
  } else {
    h = a;
  }
  if (h === 0) {
    return 'rock';
  }
  if (h === 1) {
    return 'scissors';
  }
  if (h === 2) {
    return 'paper';
  }
};

//連勝数を記録する関数
export const win_st = (pre, result) => {
  //あいこのときは、元の連勝数を返す
  if (result === 0) {
    return pre;
  }
  //勝ちの時は、連勝数が1増える
  if (result === 1) {
    return pre + 1;
  }
  //負けの時は、連勝数が0に
  if (result === 2) {
    return 0;
  }
};
