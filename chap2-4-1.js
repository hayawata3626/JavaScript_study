let text = prompt('入力せよ');
if (!isNaN(text)) {
  console.log(parseInt(text) + 80);
} else {
  console.log('数字ではない');
}