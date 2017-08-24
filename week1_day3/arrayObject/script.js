// var myArray = [1, "Jen", true, null, 0];
//
// console.log(myArray[2]);
//
//
// var user1 = {
//   username: 'jpanknin',
//   password: '1234'
// }
//
// var user2 = {
//   username: 'bobdole',
//   password: '2345'
// }
//
// console.log("User1 userame: " + user1.username);
// console.log("User2 userame: " + user2.username);


var ignition = "Now, usually i don't do this but uh... gone ahead on break em' off wit a lil preview of the remix no im not tryin to be rude, but hey pretty girl im feelin you the way you do the things you do remind me of my Lexus coup that's why im all up in yo grill tryina get you to a hotel you must be a football coach the way you got me playin the field so baby gimme that toot toot and let me give you that beep beep runnin her hands through my 'fro bouncin on 24's while they say on the radio... [chorus] this is the remix to ignition hot and fresh out the kitchen mama rollin that body got every man in her wishin sippin on coke and rum im like so what im drunk its the freakin' weekend baby im about to have me some fun bounce-bounce-bounce-bounce-bounce-bounce-bounce bounce-bounce-bounce now its like murder she wrote once i get you out them clothes privacy is on the do' still they can hear you screamin mo' girl i'm feelin what you feelin no more hopin' and wishin im bout to take my"

var ignition2 = "key and stick it in the ignition so gimme that toot toot let me give you that beep beep runnin her hands through my 'fro bouncin on 24's while they say on the radio... it's the remix to ignition hot and fresh out the kitchen mama rollin that body got every man in here wishin sippin on coke and rum i'm like so what i'm drunk its the freakin' weekend baby i'm about to have me some fun crystal poppin in the stretch navigator we got food every where as if the party was catered we got fellas to my left (left) honies on my right (right) we bring 'em both together we got drinkin all night then after the show its the (after party) and after the party its the (hotel lobby) and round about 4 you gotta (clear the lobby) then take it to the room and freak somebody can i get a toot toot can i get a beep beep runnin her hands through my 'fro bouncin on 24's while they say on the radio... this is the remix to ignition hot and fresh out the kitchen mama rollin that body got every man"

var ignition3 = "in her wishin sippin on coke and rum im like so what im drunk its the freakin' weekend baby im about to have me some fun this is the remix to ignition hot and fresh out the kitchen mama rollin that body got every man in her wishin sippin on coke and rum im like so what im drunk its the freakin weekend baby im about to have me some fun girl we off in this jeep foggin windows up blastin the radio in the back of my truck bouncin up and down stroke it round and round to the remix we just thuggin it out..."

var words = [];

var ignitionSplit = ignition.split(" ");
var ignition2Split = ignition.split(" ");
var ignition3Split = ignition.split(" ");

var dashignitionSplit = ignitionSplit.split("-");
var dashignition2Split = ignition2Split.split("-");
var dashignition3Split = ignition3Split.split("-");

var count = 0;
for (word in dashignitionSplit) {
  if (word.toLowerCase() == 'bounce') {
    count += 1;
  }
}

for (word in dashignition2Split) {
if (word.toLowerCase() == 'bounce') {
  count += 1;
}
}

for (word in dashignition3Split) {
if (word.toLowerCase() == 'bounce') {
  count += 1;
}
}

console.log(count);
