const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperty(arr, 'sum', {
  value: function () { return this.reduce((a, x) => a+x)},
  enumerbale: false
});

Object.defineProperty(arr, 'avg', {
  value: function () { return this.sum() / this.length},
  enumerbale: false
})

console.log(arr.sum());
console.log(arr.avg());