//6.Zadatak  Write a function that reverses a word or sentence. Cover cases if sentence is not provided

function converter(sentence) {
  var newSentence = "";
  for (var i = sentence.length - 1; i >= 0; i--) {
    newSentence += sentence[i];
  }
  return newSentence;
}
var final = converter("macado");
console.log(final);
