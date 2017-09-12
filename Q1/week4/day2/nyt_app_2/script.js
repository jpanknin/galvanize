var submitButn = document.querySelector('#searchForm');

submitButn.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input').value;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=690ea3f6659547aba172d07d3236ce64&q=" + searchTerm;
  $.get(url, function(data) {
    var docs = data.response.docs;
    console.log(docs);
    for (var i = 0; i < docs.length; i++) {
      console.log(docs[i].headline.main);
      var para = document.createElement('p');
      var headlines = document.querySelector('body');
      var headline = document.createTextNode((i + 1) + ". " + docs[i].snippet);
      para.appendChild(headline);
      headlines.appendChild(para);

    }
  })
})


https://static01.nyt.com/images/2017/09/08/world/08convoysub/08convoysub-master768.jpg
