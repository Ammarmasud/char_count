function countLetters(sentence) {
  var count = {};

  for (letter of sentence) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }

  return count
}

var input = process.argv.slice(2).join("").toLowerCase();
console.log(countLetters(input));