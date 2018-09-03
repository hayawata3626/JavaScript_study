const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
console.log(dialog1);// "He looked up and said "don't do that!" to Max."
console.log(dialog2);// He looked up and said "don't do that!" to Max
console.log(dialog1 === dialog2);

// テンプレートリテラルを使用した例
const dialog3 = `He looked up and said "don't do that!" to Max.`;
console.log(dialog3);
console.log(dialog2 === dialog3);// true

// 文字列データに「\」を含めたい場合
const s = "In JavaScript, use \\ as an escape character in strings";
const s2 = "JavaScriptの文字列では、\\はエスケープ文字として扱われる。";