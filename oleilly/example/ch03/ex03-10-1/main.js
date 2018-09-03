let currentTemp;
console.log(currentTemp); // undefined
currentTemp = null; // currentTempはnull(未設定を表現)
console.log(currentTemp); // null
currentTemp = 26.5;
console.log(currentTemp);
currentTemp = undefined; //(非推奨) 値が設定されたことがないように見える
console.log(currentTemp); // undefined