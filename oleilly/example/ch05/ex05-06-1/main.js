// undefined
if (undefined) {
    console.log("t");
} else {
    console.log("f");
}

// null
if (null) {
    console.log("t");
} else {
    console.log("f");
}

//  0
if (0) {
    console.log("t");
} else {
    console.log("f");
}

// NaN
if (NaN) {
    console.log("t");
} else {
    console.log("f");
}

// 空白
if ('') {
    console.log("t");
} else {
    console.log("f");
}

console.log("--------");

// object
const obj1 = {};
if(obj1) {
    console.log("t");
} else {
    console.log("t");
}

// array
const arr = [];
if (arr)  {
    console.log("t");
} else {
    console.log("f");
}

// 空白のみを含む文字列
if ("   ") {
    console.log("t");
} else {
    console.log("f");
}

// 文字列false
if ('false') {
    console.log("t");
} else {
    console.log("f");
}







