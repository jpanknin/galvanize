var submitButton = document.querySelector('#nytAPI')

document.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('#searchTerm').value;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  
  url += '?' + $.param({
    'api-key': "690ea3f6659547aba172d07d3236ce64",
    'q': searchTerm
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
})
