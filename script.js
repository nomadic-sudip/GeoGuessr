function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomButton = getRandomNumber(1, 3);
function gameStart() {
  var randomNumber = getRandomNumber(0, 15);
  document.getElementById("randNum").innerText = randomNumber;
  document.getElementById("main").innerHTML =
    "<button class='btn btn-primary mr-2' id='btn1' onclick='check(1, randomButton)' >1</button>  <button class='btn btn-primary mr-2' id='btn2' onclick='check(2, randomButton)'>2</button> <button class='btn btn-primary mr-2' id='btn3' onclick='check(3, randomButton)'>3</button>";
  var binary = randomNumber.toString(2);

  var randomValue1 = getRandomNumber(0, 15).toString(2);
  var randomValue2 = getRandomNumber(0, 15).toString(2);
  var randomValue3 = getRandomNumber(0, 15).toString(2);
  var specificValue = binary;
  document.getElementById("btn1").innerText =
    randomButton === 1 ? specificValue : randomValue1;
  document.getElementById("btn2").innerText =
    randomButton === 2 ? specificValue : randomValue2;
  document.getElementById("btn3").innerText =
    randomButton === 3 ? specificValue : randomValue3;
}
function check(num, randomButton) {
  if (num == randomButton) {
    document.getElementById("result").innerText = "CORRECT";
  } else {
    document.getElementById("result").innerText = "INCORRECT";
  }
  gameStart();
}
function start() {
  document.getElementById("stbtn").remove();
  gameStart();
}
