var obj = {a: 1, b: 2};
var newObj = {};

for (key in obj) {
  console.log(key, obj[key]);
  newObj[obj[key]] = key;
}

console.log(obj);
console.log(newObj);
