const book = [
  "ある所に初老の夫婦が住んでたとさ",
  "夫は山へ妻は川へ行ったとさ",
  "妻は川で洗濯をしていると",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ, スッコッコ",
  "ドンブラコッコ, スッコッコ",
];

const it = book[Symbol.iterator()];
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());