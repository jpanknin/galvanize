var container = document.querySelector('#pGroup');

container.addEventListener('click', function(e) {
  console.log(e.target.textContent);
})







// var el = document.querySelector('button');
//
// el.addEventListener("click", function() {
//   el.innerHTML = 'Clicked';
// })
//
// var par = document.querySelector('p');
//
// par.addEventListener('click', function() {
//   console.log("You clicked me!");
//   par.style.color = 'red';
//   par.style.fontFamily = 'Arial';
//   var p = document.createElement('p');
//   var t = document.createTextNode("New Paragraph");
//   p.appendChild(t);
//   document.body.appendChild(p);
// })
//
// par.addEventListener('mouseover', function() {
//   par.style.color = 'blue';
//   par.textContent = 'Changed';
// })
//
// par.addEventListener('mouseleave', function() {
//   par.textContent = "This is a paragraph";
//   par.style.color = 'black';
// })
//
// document.querySelector('body').addEventListener('click', function() {
//   document.querySelector('body').innerHTML = "<h1>This is new!</h1>";
// })
