function 関数1(引数1, 引数2) {
  return 引数1*引数2;
 }

 console.log(関数1(3,5,));

const 結果 = (function (引数1, 引数2) {
  console.log(`足し算の結果=${引数1+引数2}`);
}) (3, 5);

console.log(`掛け算の結果=${結果}`,);