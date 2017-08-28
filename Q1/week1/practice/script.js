// arr = [[1], [2], [3]];
// arr2 = [1, 2, 3];
//
// console.log("arr length: " + arr.length);
// for (var i = 0; i < arr.length; i++) {
//   console.log("arr[" + i + "]: " + arr[i]);
//   console.log("arr[" + i + "] type: " + typeof(arr[i]));
// }
//
// console.log("arr2 length: " + arr2.length);
// for (var i = 0; i < arr2.length; i++) {
//   console.log("arr2[" + i + "]: " + arr2[i]);
//   console.log("arr2[" + i + "] type: " + typeof(arr2[i]));
// }

// var cat = {}
//
// cat.legs = 3;
// cat.name = "Harmony";
// cat.color = "Tortoiseshell";
//
// console.log(cat);
// console.log(Object.values(cat));

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
} };

for (item in movies) {
  console.log(Object.keys(movies));
}
