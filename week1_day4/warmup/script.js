alert("Welcome to the Week 1 - Day 4 Warmup Exercise.\n\n Please press 'OK' or 'Enter' to continue.");
alert("This adventure lets you choose which direction to go.\n\nPress 'OK' or 'Enter' to continue.");

var begin = prompt("Please choose which job you want when you graduate. \n\nPress 1 for Finance, 2 for Tech, and 3 for Law.");

if (begin == 1) {
  alert("Great choice.");
  var financeChoice = prompt("Would you prefer banking or trading?");
  if (financeChoice.toLowerCase() == 'banking') {
    alert("Bankers have great hours!");
    console.log("Get this guy a clown tie for a bday present.");
  } else if (financeChoice.toLowerCase() == 'trading') {
    alert("Better get good at math and find a good lawyer for when the SEC comes after you!");
    console.log("Get this guy an espresso maker as a Christmas gift.");
  } else {
    alert("That is not a valid choice.")
  }

} else if (begin == 2) {
  alert("Nice!");
  var techChoice = prompt("Would you prefer a big company or a startup?\n\n Press 1 for big and 2 for startup.");
  if (techChoice == 1) {
    alert("Google has a great coffee bar!");
    console.log("Get them some hoodies for a job-warming present.");
  } else if (techChoice == 2) {
    alert("That'll be fun!  After a few years of starving you can buy a place in the Hamptons after you sell your company to Google!");
    console.log("Get this girl a copy of 'The Lean Startup.'");
  } else {
    alert("That is not a valid choice.");
  }

} else {
  if (begin == 3) {
    alert("Um, ok....");
    var lawChoice = prompt("Do you want to do corporate law or litigation?");
  } if (lawChoice.toLowerCase() == 'corporate') {
    alert("I'm so jealous that you'll get to read legal documents all day long!");
    console.log("Sucks for them...");
  } else if (lawChoice.toLowerCase() == 'litigation') {
    alert("I'm so jealous that you'll get to argue with people all day long!");
    console.log("Never date a girl that argues for a living.  You'll never win...");
  } else {
    alert("That is not a valid chocie.")
  }
}
