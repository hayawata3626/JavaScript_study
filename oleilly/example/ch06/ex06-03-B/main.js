function f(a, b = "default", c) {
  return `${a} - ${b} - ${c}`;
}

console.log(f(5,6,7));
console.log(f(5,6));
console.log(f(5));
console.log(f());