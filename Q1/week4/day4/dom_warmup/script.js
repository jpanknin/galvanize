

function createList(sites) {
  var unList = document.body.createElement('ul');
  document.body.appendChild(unList);
  console.log(sites);

}

var sites = {
     'Google': 'https://www.google.com',
     'Facebook': 'https://www.facebook.com',
     'GitHub': 'https://github.com',
     'Galvanize': 'https://www.galvanize.com'
   }

createList(sites);
