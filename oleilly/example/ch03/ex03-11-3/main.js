const obj = {};
obj.color = "黄色";
obj["not as identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);

