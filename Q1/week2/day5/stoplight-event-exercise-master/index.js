(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButn = document.getElementById('stopButton');
  var redLight = document.getElementById('stopLight');
  stopButn.addEventListener('click', function() {
    redLight.classList.toggle('stop');
  })

  var slowButn = document.getElementById('slowButton');
  var yellowLight = document.getElementById('slowLight');
  slowButn.addEventListener('click', function() {
    yellowLight.classList.toggle('slow');
  })

  var goButn = document.getElementById('goButton');
  var greenLight = document.getElementById('goLight');
  goButn.addEventListener('click', function() {
    greenLight.classList.toggle('go');
  })
})();
