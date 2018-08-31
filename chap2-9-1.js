let text = prompt("年齢は？");

if (!isNaN(text)) {
  let age = parseInt(text)
  if (age < 20){
    if (age >= 6 && age <= 15 ){
      console.log("(義務教育)")
    }
    console.log("未成年")
  } else if (age < 65){
    console.log("成人")
  } else {
    console.log("高齢者")
  }
}
