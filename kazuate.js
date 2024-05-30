let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let gameEnded = false; // ゲーム終了フラグ

let a = document.querySelector('#kaito');
a.addEventListener('click', hantei);

function hantei() {
  // ゲームが終了している場合のメッセージ
  if (gameEnded) {
    let results = document.querySelector('p#result');
    results.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
    return;
  }

  kaisu++;
  let Input = document.querySelector('input[name="yoso"]');
  let yoso = Number(Input.value);
  let kaisuHyoji = document.querySelector('span#kaisu');
  kaisuHyoji.textContent = kaisu;

  let as = document.querySelector('span#answer');
  as.textContent = yoso;

  let results = document.querySelector('p#result');

  // 正解の場合
  if (yoso === kotae) {
    results.textContent = "正解です。おめでとう！";
    gameEnded = true; // ゲーム終了フラグを設定
  } else {
    if (kaisu === 3) {
      results.textContent = "まちがい。残念でした。答えは " + kotae + " です。";
      gameEnded = true; // ゲーム終了フラグを設定
    } else if (yoso < kotae) {
      results.textContent = "まちがい。答えはもっと大きいですよ。";
    } else {
      results.textContent = "まちがい。答えはもっと小さいですよ。";
    }
  }
}