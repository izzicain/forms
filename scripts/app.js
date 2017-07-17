console.log('hi');

var firstSentence = 'You run away! Once the bear is out of sight, you continue your walk.';
var secondSentence = 'You ask the bear his name, but he only speaks Swedish! No luck here. He turns around and walks down the trail, leaving you alone. You continue on your walk.';
var thirdSentence = 'The chest contains nothing but a spell to curse you! You have turned into a monkey.';
var fourthSentence = 'The hikers approach and open the chest for you. Right before your eyes, they turn into monkeys. The chest must have contained a curse! Good thing you waited it out.';
var fifthSentence = 'You head to the left and pick up the pace to hopefully see the sunset. You walk faster and faster but it the sky gets darker and darker. It turns out this path leads you back to the start of the trail. You get in your car and head home, disappointed that you did not get to see the sunset.';
var sixthSentence = 'You head to the right and pick up the pace to hopefully see the sunset. You make it to the top of the mountain just in time to see the sun set. After you head home.';
var seventhSentence = 'As you go to grab the ingredients for soup, you remember your stove and microwave are broken. No soup for you! Ice cream it is.';
var eighthSentence = 'Great choice! Ice cream is superior to all other foods.';

window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');
  var firstChoice = document.getElementById('choice-one');
  var secondChoice = document.getElementById('choice-two');
  var thirdChoice = document.getElementById('choice-three');
  var fourthChoice = document.getElementById('choice-four');
  var fifthChoice = document.getElementById('choice-five');
  var sixthChoice = document.getElementById('choice-six');
  var seventhChoice = document.getElementById('choice-seven');
  var eighthChoice = document.getElementById('choice-eight');

  firstChoice.onclick = function(event) {
    createRow(firstSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  secondChoice.onclick = function(event) {
    createRow(secondSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  thirdChoice.onclick = function(event) {
    createRow(thirdSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fourthChoice.onclick = function(event) {
    createRow(fourthSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fifthChoice.onclick = function(event) {
    createRow(fifthSentence);
    document.getElementById('third-step').style.display = 'none';
  }

  sixthChoice.onclick = function(event) {
    createRow(sixthSentence);
    document.getElementById('third-step').style.display = 'none';
  }

  seventhChoice.onclick = function(event) {
    createRow(seventhSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }

  eighthChoice.onclick = function(event) {
    createRow(eighthSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }

  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
    createRow('Welcome, ' + nameInput.value);
  }

  console.log(nameInput, nameBtn);

}

// this function creates and adds rows to our app
function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}
