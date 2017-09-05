var redBox = document.querySelector('#red');
redBox.addEventListener('click', function() {
  var bodRed = document.querySelector('body');
  bodRed.style.backgroundColor = "red";
});

var blueBox = document.querySelector('#blue');
blueBox.addEventListener('click', function() {
  var bodBlue = document.querySelector('body');
  bodBlue.style.backgroundColor = "blue";
});

var yellowBox = document.querySelector('#yellow');
yellowBox.addEventListener('click', function() {
  var bodYellow = document.querySelector('body');
  bodYellow.style.backgroundColor = "yellow";
});

var greenBox = document.querySelector('#green');
greenBox.addEventListener('click', function() {
  var bodGreen = document.querySelector('body');
  bodGreen.style.backgroundColor = "green";
});


// with js it's always two things:
// first, select the item to be listened for
// second, add event handler
// under this, we need to select the item to be manipulated
//
