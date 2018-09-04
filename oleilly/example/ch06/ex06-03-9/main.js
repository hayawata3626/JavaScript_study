function addPrefix(prefix, ending, ...words) {
  const prefixedWords = [];
  for (let i=0; i< words.length; i++){
    prefixedWords[i] = prefix + words[i] + ending;
  }
  return prefixedWords;
}

console.log(addPrefix("con", "です",　"verse", "vex"));// ["converse, convex"]
console.log(addPrefix("非", "です", "プログラマー", "デザイナー", "コーダー"));