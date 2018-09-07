function* rainbow() {
  yield '赤';
  yield  '藍';
  yield  '黄';
  yield  '緑';
  yield  '青';
  yield  '水色';
  yield  '紫';
}

const it = rainbow();

for(let color of rainbow()){
  console.log(color);
}
