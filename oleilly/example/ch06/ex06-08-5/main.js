const bruce = { 名前: "ブルース"};
const madeline = { 名前: "マデライン"};

function update(birthday, occupation) {
    this.生年 = birthday;
    this.職業 = occupation;
}
console.log(bruce);
const newBruce = [1940, "武道家"];
update.call(bruce, ...newBruce);
console.log(bruce);

const arr = [2, 3, -5, 15, 7];
console.log(Math.min(...arr));
console.log(Math.max(...arr));

// console.log(madeline);
// update.apply(madeline, [1918, "ライター"]);
// console.log(madeline);