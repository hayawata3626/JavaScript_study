'use strict';
class Logger {
  constructor(name){
    this.name = name;
    this.log = [];
  }
  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now(),
    });
  }
}

const log = new Logger("船長の航海日記");
Object.seal(log);
console.log(Object.isSealed(log));

log.name = "船長の退屈な航海日記";
log.add("またまた退屈な日だ...");

// log.newProp = "test";

log.name = "テスト";

// delete log.name;

// Object.defineProperty(log, 'log', { enumerable: false });

const log2 = new Logger("一等航海士の航海日記");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));
log2.name = "一等航海士の退屈な航海日記";
log2.add("またまた退屈な日だ...");
console.log(log2);

// log.2.newProp = "test";

log2.name = "テスト";
delete log2.name;
Object.defineProperty(log2, 'log', { enumerable: false});
console.log(log2);