function f(o){
  console.log(`fの中(2つの代入前): o.message="${o.message}"`, 2); //  fの中(2つの代入前): o.message=初期値
  o.message = "fで最初にセットされた"; // 関数fの外にあるo.messageの値も書き換わる
  console.log(`fの中(2つの代入の間):o.message="${o.message}"`, 3); // fの中(2つの代入前): o.message=fの最初にセットされた
  // ここで別のオブジェクトを参照するようになる
  o = {
    message: '新しいオブジェクト'
  };
  console.log(`fの中(2つの代入後): o.message="${o.message}"`, 4);
}

let o = {
  message: "初期値"// 関数の中で変更される？
};

console.log(`fの呼び出し前:o.message="${o.message}"`, 1);// fの呼び出し前:o.message=初期値
f(o);
console.log(`fの呼び出し後: o.message="${o.message}"`, 5);// fの呼び出し後: o.message=新しいオブジェクト