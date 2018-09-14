const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf-8'});
console.log('読み込んだファイルに内容');
console.log(data);