console.log('hi');

window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');

  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
  }

  console.log(nameInput, nameBtn);

}
