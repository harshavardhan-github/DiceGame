var player1 = prompt("Enter the name of first plater");
var player2 =prompt("Enter the name of second player")



var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imagescr = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imagescr);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 " + player1 + " Wins";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "" +player2+  " wins 🚩";
}

else{
  document.querySelector("h1").innerHTML = "😑 Draw!";
}
