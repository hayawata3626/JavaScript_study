/* list2 */
const cofficients = {
  a: 1,
  c: 3
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const betterCofficients = new Proxy(cofficients, {
  get(target, key) {
    if(!/^[a-z]$/.test(key)) return target[key];
    return target[key] || 0;
  },
});

console.log(betterCofficients.a);
console.log(betterCofficients.b);
console.log(betterCofficients.c);
console.log(betterCofficients.d);
console.log(betterCofficients.z);
console.log(betterCofficients.anything);
console.log(evaluate(5, betterCofficients));