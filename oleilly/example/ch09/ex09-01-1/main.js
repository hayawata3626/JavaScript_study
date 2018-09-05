// const SYM = Symbol();
// const o = { a: 1, b: 2, c: 3, [SYM]: 4};
// for(let prop in o){
//   if(prop.hasOwnProperty(prop)) continue;
//   console.log(`${prop}: ${o[prop]}`);
// }

const o2 = { a:1, b: 2, c: 3, SYM: 4};
console.log(o2.SYM);// 4
console.log(o2["SYM"]); // 4
console.log(o2[SYM]); //undefined