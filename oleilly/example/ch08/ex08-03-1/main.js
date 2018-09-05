const o = {name: "ジェリー"};
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5)); // 最後の添字を返す
console.log(arr.indexOf("a"));
console.log(arr.lastIndexOf("a"));
console.log(arr.indexOf({name: "ジェリ-"}));
console.log(arr.indexOf(o));// 3
console.log(arr.indexOf([1, 2]));// -1
console.log(arr.indexOf("9")); // 7
console.log(arr.indexOf(9)); //-1

console.log(arr.indexOf("a", 5));// -1
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4)); // 1s
console.log(arr.lastIndexOf(true, 3)); // -1