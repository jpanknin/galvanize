var searchForm = document.querySelector('#pokeSearch');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input').value;
  // Look up .get()
  $.get('https://pokeapi.co/api/v2/pokemon/' + searchTerm.toLowerCase() + "/", function(data) {
    document.querySelector('#pokeName').innerText = data.forms[0].name;
    for (var i = 0; i < data.abilities.length; i++) {
      var list = document.querySelector('#abilities');
      var listItem = document.createElement('li');
      var ability = document.createTextNode(data.abilities[i].ability.name);
      listItem.appendChild(ability);
      list.appendChild(listItem)
    }
    var result = "";
    for (var i = 0; data.stats.length; i++) {
      result = result + "<li>" + data.stats[i].stat.name + "</li>";
      document.querySelector('#stats').innerHTML = result;
    }
  })
});
