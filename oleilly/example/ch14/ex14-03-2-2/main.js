function countdown(seconds) {
  return new Promise(function (onFulfilled, onRejected) {
    const timeoutIds = [];
    for (let i = seconds; i >= 0; i--){
      timeoutIds.push(
        setTimeout(function () {
          if (i === 13) {
            timeoutIds.forEach(clearTimeout);
            onRejected(new Error(`${i}という数は不吉すぎます`));
          } else if (i > 0) {
            console.log(i + '...');
          } else {
            console.log("Go!!");
            onFulfilled();
           }
        }, (seconds-i)*1000)
      )
    }
  });
}

countdown(15).then(
  function () {
    console.log("カウントダウン成功!!")
  },
  function (err) {
    console.log("カウントダウンでエラーが起こった：" + err.message);
  }
)
