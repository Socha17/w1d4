var words = ["ground", "control", "to", "major", "tom"];
var numberOfLetters = []

var map = function(words, callback) {


for (var i = 0; i < words.length; i++) {
    // console.log(words[i].length);
    // array.push(words[i].length);
    callback(words[i])
}


}
// call back???
// why never gets to the function??
map(words, function(word) {

  // why is it .length? its suppose to be an array
  // numberOfLetters.push();
  return numberOfLetters.push(word.length);
});


console.log(numberOfLetters);
// console.log(map);
