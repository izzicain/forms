console.log('hi');

window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');

  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
    createRow('Welcome aboard, ' + nameInput.value);
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
