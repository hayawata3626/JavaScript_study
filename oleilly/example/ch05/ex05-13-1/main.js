let v, v0;
v = v0 = 9.8;// 連続して代入される
console.log(v);
console.log(v0);

const nums = [3, 5, 15, 7, 5];
let n, i = 0;
while (i < nums.length && (n = nums[i++]) < 10){
 console.log(`10より小さい値を発見${n}`);
}

console.log(`10より大きい値を発見${n}`);
console.log(`未チェックの数字の個数:${nums.length - i}`)