const obj = {b:2, c:3, d:4};
let a, b, c;
({a, b, c} = obj); // 括弧で囲う必要がある
console.log(a);
console.log(b);
console.log(c);
{a, b, c} = obj; // ブロック(文のかたまり)を囲む{...}だと解釈される


