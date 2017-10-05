var submitButn = document.querySelector('#searchForm');

submitButn.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchTerm = document.querySelector('input').value;
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=690ea3f6659547aba172d07d3236ce64&q=" + searchTerm;
  $.get(url, function(data) {
    var docs = data.response.docs;
    console.log(docs);
    for (var i = 0; i < docs.length; i++) {
      var pubDate = docs[i].pub_date;
      if (pubDate != undefined) {
        var date = pubDate.slice(0, 10);
        var time = pubDate.slice(11, 19);
        console.log(date + " " + time);
        var dateBox = document.querySelector('#dateBox');
        var para = document.createElement('p');
        var appendDate = document.createTextNode(date);
        para.appendChild(appendDate);
        dateBox.appendChild(para);
      }

    }
  })
})
