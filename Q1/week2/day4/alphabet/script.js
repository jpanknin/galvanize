// Description:

// Welcome. In this warmup you are required to, given a
// string, replace every letter with its position
// in the alphabet. If anything in the text isn't a letter,
// ignore it and don't return it. a being 1, b being 2,
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
  var upperAlphabet = [];
  var lowerAlphabet = [];
  var endString = "";
  for (var i = 65; i < 91; i++) {
    var chr = String.fromCharCode(i);
    upperAlphabet.push(chr);
  }
  for (var i = 97; i < 123; i++) {
    var chr = String.fromCharCode(i);
    lowerAlphabet.push(chr);
  }

  for (var j = 0; j < text.length; j++) {
    if (upperAlphabet.includes(text[j])) {
      var code = (upperAlphabet.indexOf(text[j])) + 1;
      endString += code.toString() + " ";
    } else if (lowerAlphabet.includes(text[j])) {
      var code = (lowerAlphabet.indexOf(text[j])) + 1;
      endString += code.toString() + " ";
    }
  }
  return endString;
}

text = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(text));

// ************************

function alphabetPosition(text) {
  var alphabet = [];
  var endString = "";

  for (var i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  for (var j = 0; j < text.length; j++) {
    var char = text[j].toLowerCase();
    if (alphabet.includes(char)) {
      endString += (alphabet.indexOf(char) + 1).toString() + " ";
    }
  }
  return endString;
}

text = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(text));
