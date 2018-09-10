'use strict';
const fs = require('fs');

function readFile(fileName) {
  return new Promise(
    (onFulfilled, onRejected) => {
      fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
          console.error("readFile error：" + fileName + err);
          onRejected(err);
        }
        onFulfilled(data);
      })
    }
  )
}

function writeFile(fileName, data) {
  return new Promise(
    (onFulfilled, onRejected) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          console.error("writeFile error：" + fileName + err);
          onRejected(err);
        }
        onFulfilled("OK!!");
      })
    }
  )
}

Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
  .then(function (results) {
    console.log(results);
    const allData = results[0] + results[1] + results[2];
    return writeFile("d.txt", allData);
  })
  .then(function (mes) {
    console.log("ファイル合成に成功しました")
  })
  .catch(err => {
    console.log("エラーが起こりました");
  });
