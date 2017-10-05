function tooShort() {
  console.log("Hello");
  var messages = document.querySelector("#messages");
  var para = document.createElement('p');
  var message = document.createTextNode("Sorry, your username is too short");
  para.appendChild(message);
  messages.appendChild(para);
}

function tooLong(username) {
  var messages = document.querySelector('#messages');
  var para = document.createElement('p');
  var message = "Sorry, " + "'" + username + "'" + " is too long."
  var outputMessage = document.createTextNode(message);
  para.appendChild(outputMessage);
  messages.appendChild(para);
}

document.addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.querySelector("#username").value;
  var output = document.querySelector('#output');
  if (username.length < 5) {
    tooShort();
  } else if (username.length > 10) {
    tooLong(username);
  } else {
    output.innerHTML = username;
  }
})
