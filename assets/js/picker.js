var numberOfCircles = 6;
var colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
   setupModeButtons();
   setupCircles();
   reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfCircles = 3: numberOfCircles = 6;
			reset();
		});
	}
}

function setupCircles(){
	for(var i = 0; i < circles.length; i++){
		circles[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
   colors = generateRandomColors(numberOfCircles);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   messageDisplay.textContent = "";
   resetButton.textContent = "New Colors";
   for(var i = 0; i < circles.length; i++){
      if (colors[i]) {
         circles[i].style.display = "block";
         circles[i].style.backgroundColor = colors[i];
      } else {
         circles[i].style.display = "none";
      }
      
   }
   h1.style.backgroundColor = "steelblue";
}

function changeColors(color){
   for(var i = 0; i < circles.length; i++){
      circles[i].style.backgroundColor = color;
   }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
   var arr = [];
   for(var i = 0; i < num; i++){
      arr.push(randomColor());
   }
   return arr;
}

function randomColor(){
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
   reset();
});