{
  let x = { color: "青" };
  let y = x;
  let z = 3;
  {
    let x = 5;
    console.log(x); // 5
    console.log(y.color); // 青
    y.color = "赤";
    console.log(z); // 3
  }
  console.log(x.color); // 赤
  console.log(y.color); // 赤
  console.log(z); // 3
}