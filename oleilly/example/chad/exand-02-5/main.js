const SPECIAL = Symbol();

let 各マスの掛け金 = {
  王冠: 0,
  金猫: 5,
  [SPECIAL]: 13
};

let x = Object.getOwnPropertyDescriptors(各マスの掛け金);

// console.log(x.王冠);
// console.log(x.金猫);
// console.log(x[SPECIAL]);
// console.log(Object.entries(x))

for (let [プロパティ, ディスクリプタ] of Object.entries(x)){
  // console.log(プロパティ + "：", "プロパティ");
  console.log(ディスクリプタ, "ディスクリプタ")
  for (let [p, v] of Object.entries(ディスクリプタ)){
    console.log(p, "p")
    console.log(v, "v")
    console.log(" " + p + "：" + v);
  }
}
