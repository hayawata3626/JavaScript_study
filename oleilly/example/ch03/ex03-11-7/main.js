const sam1 = {
  name:"Sam",
  age: 4,
};

// console.log(sam1);

const sam2 = { name: "Sam", age: 4 }; /* 1行で宣言　*/
// console.log(sam2);
//
// console.log(sam1.name === sam2.name); // true
// console.log(sam1.age === sam2.age); // true
// console.log(sam1 === sam2); // false

const sam3 = {
  name : "Sam",
  classification: {
    kingdom: 'Animalia',
    phylum : 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};
console.log(sam3);

const タマ = {
  名前: 'タマ',
  分類: {
    界: '動物界',
    門: '脊椎動物門',
    網: '哺乳類',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

// console.log(タマ.分類.科); // ネコ科
// console.log(タマ["分類"].科); // ネコ科
// console.log(タマ.分類["科"]);　// ネコ科
// console.log(タマ["分類"]["科"]); // ネコ科

sam3.speak = function () {return "Meow!";};
タマ.鳴く = function () {return "ニャーゴ";};
// console.log(sam3.speak());
// console.log(タマ.鳴く());

delete sam3.classification;
delete sam3.speak;
console.log(sam3);

console.log(タマ);
delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);