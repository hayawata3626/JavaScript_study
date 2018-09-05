console.log("ブロックの前");

{
  console.log("ブロック内");
  const x = 3;
  console.log(x);
}
console.log(`ブロック内の外。x=${x}`);