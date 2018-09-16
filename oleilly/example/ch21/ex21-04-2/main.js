/* list2 */
const cofficients = {
  a: 1,
  c: 3
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(evaluate(5, cofficients));
