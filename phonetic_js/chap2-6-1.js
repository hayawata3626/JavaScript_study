let text = prompt("年齢は？");
let age = parseInt(text);
if (age < 20) {
  console.log("未成年")
} else if ( age < 65){
  console.log("成人")
} else {
  console.log("高齢者")
}