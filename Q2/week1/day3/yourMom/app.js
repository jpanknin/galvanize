var express = require('express');
var app = express();
var fs = require('fs');

app.get('/yourMom', function(req, res) {
  res.send('How rude!');
})

app.listen(8000, function() {
  console.log('You are listening');
});
