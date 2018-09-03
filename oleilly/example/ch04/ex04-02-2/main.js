// // let s = '3';
// // for (; s.length < 10; s = ' ' + s);
// // console.log(s);
// //
// // for(let x = 0.2; x < 3.0; x += 0.2) {
// //   console.log(x);
// // }
//
// const player = {name: "Thomas", rank : "Midshipman", age: 25 };
// for(let prop in player) {
//   if(!player.hasOwnProperty(prop)) continue;
//   console.log(prop + ':' + player[prop]);
// }
const arr = [1, 2, 3];
for (value in arr){
  console.log(value, "for...inの場合");
}

for (value of arr) {
  console.log(value, "for...ofの場合");
}