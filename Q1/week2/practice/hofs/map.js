var base = [2, 1, 0, -1, -2];
var range = .25;
var capRate = 6;
var noi = 1000000;

function caps(base, range, rate) {
  var rates = base.map(function(base) {
    return (rate + (range * base)) / 100;
  });
  return rates;
}

function values(caps, base, range, rate, noi) {
  var cap = caps(base, range, rate);
  var valuations = cap.map(function(rate) {
    return noi / rate;
  })
  return valuations;
}

console.log("Caps: ", caps(base, range, capRate));
console.log("Values: ", values(caps, base, range, capRate, noi));






// function caps(base, range, rate) {
//   var rates = base.map(function(base) {
//     return (rate + (range * base)) / 100;
//   });
//   return rates;
// }
//
// function values(base, range, rate, noi) {
//   var cap = caps(base, range, rate);
//   var valuations = cap.map(function(rate) {
//     return noi / rate;
//   })
//   return valuations;
// }
//
// console.log("Caps: ", caps(base, range, capRate));
// console.log("Values: ", values(base, range, capRate, noi));








// var caps = base.map(function(el) {
//   return ((capRate + (range * el)) / 100);
// })
