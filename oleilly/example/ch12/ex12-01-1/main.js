const book = [
  "ある所に初老の夫婦が住んでたとさ",
  "夫は山へ妻は川へ行ったとさ",
  "妻は川で洗濯をしていると",
  "上流から桃が流れてきたとさ。",
  "ドンブラコッコ, スッコッコ",
  "ドンブラコッコ, スッコッコ",
];

for (let aPage of book) {
  console.log(aPage);
}

const it = book.values();
it.next();

