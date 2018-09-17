for (let i = 0; i <= 300; i++){
  const 数字部分 = i.toString().padStart(3, 0);
  const ファイル名 = `pictures/pict${数字部分}.jpg`;
  console.log(`<img src="${ファイル名}" style="width: 4cm">`);
}