const colors = ["赤", "藍", "黄", "緑", "青"];
let colorIndex = -1;
function getNextRainbowColor() {
  if(++colorIndex >= colors.length) {
    colorIndex = 0
  }
  return colors[colorIndex];
}

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());


