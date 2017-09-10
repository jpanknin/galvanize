var arr = [1, 2, 3, 4, 5, 6];

function odd(num) {
  return num % 2 != 0;
}

var odds = arr.filter(odd);
console.log("Odd: ", odds);




var evens = arr.filter(function(el) {
  return el % 2 == 0;
})

console.log("Even: ", evens);
