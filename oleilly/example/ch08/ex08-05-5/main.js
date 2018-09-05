const words = ["BeachBoll", "Rodeo", "Angel",
  "Aardvark", "Xylophone", "November", "Chocolate",
  "Papaya", "Uniform", "Joker", "Clover", "Bali"
];

// wの文字数が6単語以上だったら
const longWords = words.reduce((a, w) => {
  return w.length > 6 ? a+ " "+w : a, "";
}).trim();
console.log(longWords);

const 単語リスト = [
  "ビーチボール", "ルービックキューブ", "ブタペスト", "トロッコ", "コンゴ", "ゴースト", "トーラス", "スマート"
];

const 長い単語 = 単語リスト.reduce((a, w) => w.length >= 5 ? a+" "+w : a, "");
console.log(長い単語);