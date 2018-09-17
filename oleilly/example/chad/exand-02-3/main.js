console.log("".padStart(30, "1234567890"));
const l = 0.34e-2.toString();
const m = "3.14";
const n = "3";
console.log(l.padStart(10) + m.padStart(10) + n.padStart(10));
console.log(l.padStart(10, "_") + m.padStart(10, "_" + n.padStart(10, "_")));
console.log(l.padStart(10) + m.padEnd(10) + n.padEnd(10));

console.log("".padStart(20, "一二三四五六七八九〇"));
let 表 = "".padStart(20, "=* *=") + "\n";
表 += "| "+"右寄せ".padStart(8, " ")+" |"+"左寄せ".padEnd(8," ")+" |\n";
表 += "| "+"左寄せ".padEnd(8, " ")+" |"+"右寄せ".padStart(8," ")+" |\n";
console.log(表);