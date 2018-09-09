console.log("setTimeoutの前: " + new Date());
setTimeout(
  function f() {
    console.log("これは関数の中: " + new Date());
  }, 10*1000
);
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");

console.log("setTimeoutの前: " + new Date());
setTimeout(() => console.log("アロー関数中：" + new Date()), 10*1000);
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");