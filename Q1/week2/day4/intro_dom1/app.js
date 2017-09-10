var getTitle = document.getElementsByTagName('h1');
console.log(getTitle)

var getH3 = document.getElementsByTagName('h3');
console.log(getH3);

var changeFood = document.getElementsByTagName('h3')[0];
console.log(changeFood);
changeFood.textContent = 'Tacos';
changeFood.style.color = 'red';

var changePizza = document.getElementsByTagName('li')[1];
console.log(changePizza);
changePizza.textContent = 'Veggie Tacos';

var changeImg = document.getElementsByClassName('foodPic')[0];
console.log(changeImg);
changeImg.src = "http://del.h-cdn.co/assets/16/18/980x490/landscape-1462499635-shrimp-tempura-tacos-with-scallion-aiolil2.jpg";

var iceCreamDesc = document.createElement('p');
iceCreamDesc.textContent = "Helado is so great after tacos.";
document.body.appendChild(iceCreamDesc);
