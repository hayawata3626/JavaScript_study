const fs = require("fs");
const paht = require("path");

fs.readFile(paht.join(__dirname, 'hello.txt'), function (err, data) {
  if(err) return console.log('エラー：ファイルから読み込めません。');
  console.log("読み込んだファイルの内容");
  console.log(data);
});