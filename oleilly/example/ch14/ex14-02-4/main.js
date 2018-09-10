function countdown() {
  let i;
  console.log("カウントダウン");
  for(i = 5; i >=0; i--){
    setTimeout(function () {
      console.log(i === 0 ? "Go!" : i);
    }, (5-i)* 1000)
  }
}
countdown();