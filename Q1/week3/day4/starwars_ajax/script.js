var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState == 4 && request.status == 200) {
    var response = JSON.parse(request.responseText);
    console.log(response);
    var children = response.data.children;
    console.log(children.isArray(children));
    for (var key in children) {
      console.log(children[key].data.title);
    }
    // for (var key in response) {
    //   console.log(children[key].data.title);
    // }
  }
}


request.open('GET', 'https://www.reddit.com/r/starwars.json');

request.send();
