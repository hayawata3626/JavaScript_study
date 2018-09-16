const cook = {
  name: "Walt",
  redPhosphorus: 100,
  water: 500
}
function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if (key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
          return target.redPhosphorus = value;
      else
        return console.log("危険過ぎます！") ;
    }
    /* ほかのプロパティは安全です */
    target[key] = value;
  },
});

protectedCook.water = 500;
console.log(protectedCook.water);
console.log(protectedCook.redPhosphorus);
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);

protectedCook.allowDangerousOperations =true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);
