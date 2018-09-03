const a = parseInt("16 volts", 10); // voltsは無視。16は10進数だと解釈される
console.log(a);
const b = parseInt("3a", 16);
console.log(b);
const c = parseFloat("15.5kph");// kphは無視。parseFloatは常に10進数だと解釈される
console.log(c);
