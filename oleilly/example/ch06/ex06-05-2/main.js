const o = {
  name: 'hoge',
  speak () {return `My name  is ${this.name}`}
};

const speak = o.speak;
console.log(speak);
console.log(speak === o.speak);
console.log(speak());
console.log(o.speak());