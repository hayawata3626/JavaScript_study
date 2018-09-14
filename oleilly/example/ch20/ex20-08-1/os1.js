const exec = require("child_process").exec;

const command = "ls";
exec(command, function (err, stdout, stderr) {
  if (err) return console.log(`実行エラー${command}`);
  stdout = std.toString();
  console.log(stdout);
  stderr = stderr.toString();
  if (stderr !== '') {
    console.log("error");
    console.log(stderr);
  }
})