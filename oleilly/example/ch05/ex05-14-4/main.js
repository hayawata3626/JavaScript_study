const arr = [1, 2, 3, 4, 5];
let [x, y, ...reset] = arr;
console.log(x);
console.log(y);
console.log(reset);