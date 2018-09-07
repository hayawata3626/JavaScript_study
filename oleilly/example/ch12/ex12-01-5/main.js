const book = [
  "ある所に初老の夫婦が住んでたとさ",
  "夫は山へ妻は川へ行ったとさ",
  "妻は川で洗濯をしていると",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ, スッコッコ",
  "ドンブラコッコ, スッコッコ",
];

const it1 = book.values();
const it2 = book.values();

console.log(it1.next()); // ある所に初老の夫婦が住んでたとさ
console.log(it1.next()); // 夫は山へ妻は川へ行ったとさ

console.log(it2.next()); // ある所に初老の夫婦が住んでたとさ
console.log(it1.next()); // 妻は川で洗濯をしていると
