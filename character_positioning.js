function countLetters(sentence) {
  var count = {};
  var letter = "";

  for (var i = 0; i < sentence.length; i++) {
    letter = sentence[i];

    if (count[letter]) {
      count[letter].push(i);
    } else {
      count[letter] = [i];
    }
  }

  return count
}

var input = process.argv.slice(2).join(" ").toLowerCase();
console.log(countLetters(input));