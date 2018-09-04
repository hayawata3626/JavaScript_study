let x = 0, y = 10, z;
z = (x++, y++);// 区切りと区別するために,で囲む
console.log(z);

x = 0, y = 10;
z = x++, y++;
console.log(z); // 0