const SPECIAL = Symbol();

let 各マスの掛け金 = {
  王冠: 0,
  金猫: 5,
  ハート : 2,
  スペード: 0,
  グラブ: 3,
  ダイヤ: 0,
  [SPECIAL]: 13
}

const 配列1 = Object.entries(各マスの掛け金);
console.log(配列1);

for (let i = 0; i < 配列1.length; i++) {
  console.log(配列1[i]);
}

console.log("   マーク | 掛け金");
console.log("--------------------");

for(let [マーク, 掛け金] of Object.entries(各マスの掛け金)){
  console.log(マーク.padStart(5, " ") + " | " + 掛け金);
}

console.log(`スペシャル | ${各マスの掛け金[SPECIAL]}`);

console.log(Object.values(各マスの掛け金));