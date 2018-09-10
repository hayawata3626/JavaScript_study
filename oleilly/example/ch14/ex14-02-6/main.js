/* Nodeで実行 */
const fs = require("fs");
const fname = 'xxx';
fs.readFile(fname, function (err, data) {
  if(err) {
    return console.log(`ファイルの読み込み時のエラー${fname}: ${err.message}`);
  }
  console.log(`ファイル「${fname}」の内容を表示します：\n${data}`);
});