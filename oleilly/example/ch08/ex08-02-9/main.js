let arr = [
  {name: "Suzanne"},
  {name: "Jim"},
  {name: "Trevor"},
  {name: "Amanda"}
];

console.log(arr);
arr.sort((a, b) => {
  a.name > b.name}
  ); // nameでそーと
console.log("----------");
console.log(arr);
arr.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr);