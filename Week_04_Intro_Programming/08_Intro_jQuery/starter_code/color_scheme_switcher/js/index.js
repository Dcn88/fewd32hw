document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

$("#grayButton").on("click",switchPink);
$("#whiteButton").on("click",switchBlue);

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchPink() {
	$('body').css("background-color","pink");
	$('body').css("color","white");
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {
	$('body').css("background-color", "lightblue");
	$('body').css("color",'black')
}


