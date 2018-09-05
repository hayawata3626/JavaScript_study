let arr = new Array(5).fill(1);
console.log(arr); // [1,2,3,4,5]
let arr2 = arr.fill("a");
console.log(arr2);
console.log(arr);// 元の配列であるarr自体も変更される
console.log(arr.fill("b", 1)); // []