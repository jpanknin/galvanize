

function capRates(capRate, range) {
  var spread = [2, 1, 0, -1, -2];
  var caps = [];
  spread.forEach(function(el) {
    caps.push(capRate + (range * el))
  })
  return caps;
}

function values(caps, noi) {
  var valuations = [];
  caps.forEach(function(el) {
    console.log(el / 100);
    valuations.push((noi / (el / 100)).toFixed(2));
  })
  return valuations;
}

// console.log(capRates(6, .25));

var noi = 1000000;
var cap = 6;
var range = .25;
console.log("Array version: ", values(capRates(cap, range), noi));

function valuesObj(caps, noi) {
  var valuations = {};
  caps.forEach(function(el) {
    var key = el / 100;
    valuations[key] = noi / key;
  })
  return valuations;
}

console.log("Object version: ", valuesObj(capRates(cap, range), noi));
