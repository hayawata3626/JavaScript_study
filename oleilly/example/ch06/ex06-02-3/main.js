function getGreeting() {
  return "Hello, world!";
}

const o = {};
o.f = getGreeting; // オブジェクトoのfというプロパティに対して関数を指定
console.log(o.f());