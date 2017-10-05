var fs = require('fs');

// fs.readFile('stuff.json', function(err, data) {
//   var stuff = JSON.parse(data);
//   console.log(stuff[0].username);
// })

// var myUser = [{
//   "username": "sam",
//   "password": "2345"
// }]

var username = process.argv[2];
var password = process.argv[3];
// var userInput2 = process.argv[1];
// var userInput3 = process.argv[2];

// console.log(userInput1);

var myObj = {"username": username, "password": password};
var addStuff = JSON.stringify(myObj);

// var addStuff = JSON.stringify(myUser);
fs.writeFile('stuff.json', addStuff, function(err, data) {
  console.log(addStuff);
})
