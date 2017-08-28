// var myName = "Josh";
//
// function myFunc() {
//   var myLocalName = "Fred";
// }

// var a = 'outer';
//
// function myFunction() {
//   var b = 'inner';
//
//   console.log(a); // outer
//   console.log(b); // inner
// }
//
// myFunction();
//
// console.log(a); // outer
// console.log(b); // Uncaught ReferenceError: b is not defined

// var a = 'outer';
//
// function myFunction(a) {
//   console.log(a); // inner
// }
//
// function myFunctionAgain() {
//   var a = 'inner again!'
//   console.log(a); // inner again!
// }
//
// myFunction('inner');
// myFunctionAgain();
//
// console.log(a); // outer

var a = 'outer';

function myFunction() {
  var a = 'inner';
  console.log(a); // ???
}

myFunction();

console.log(a); // ???
