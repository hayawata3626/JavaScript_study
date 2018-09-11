const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "この段落は動的に生成されました";
p2.textContent = "この段落は動的に生成され二つ目の段落です";
const parent = document.getElementById("content");
const firstChild = parent.childNodes[0];
alert("変更します。第一段落");
parent.insertBefore(p1, firstChild);
alert("変更します。第二段落")
parent.appendChild(p2);

