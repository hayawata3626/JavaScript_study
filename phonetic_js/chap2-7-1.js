let text = prompt("年齢は？");

if (!isNaN(text)){
  let age = parseInt(text);
  if (age < 20) {
    console.log("未成年です")
  }
}