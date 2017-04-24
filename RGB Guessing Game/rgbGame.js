// Variables

 var numSquares = 6;
 var colors = generateColors(6);
 var squares = document.querySelectorAll(".square");
 var messageDisplay = document.querySelector("#message");
 var colorDisplay = document.querySelector(".colorDisplay");
 var pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;

 var h1 = document.querySelector("h1");


 var resetButton = document.querySelector(".reset");
 var modeButton = document.querySelectorAll(".mode");

 for(var i = 0; i < modeButton.length; i++) {
   modeButton[i].addEventListener("click", function() {
     modeButton[0].classList.remove("selected");
     modeButton[1].classList.remove("selected");
     this.classList.add("selected");

     this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
     reset();
   });
 }

 function reset() {
   // Generate new colors
   colors = generateColors(numSquares);
   // pick a new random colr from the array
   pickedColor = pickColor();
   // change color display to match new color
   colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
   // change colors of squares
   for(i = 0; i < squares.length; i++) {
     if(colors[i]) {
       squares[i].style.display = "block";
       squares[i].style.background = colors[i];
     }else {
       squares[i].style.display = "none";
     }

   }
   h1.style.background = "#26A8D4";

 }


 // Easy Button Logic

  // easyButton.addEventListener("click", function(){
  // 	hardButton.classList.remove("selected");
  // 	easyButton.classList.add("selected");
  // 	numSquares = 3;
  // 	colors = generateColors(numSquares);
  // 	pickedColor = pickColor();
  // 	colorDisplay.textContent = pickedColor;
  // 	for(i = 0; i < squares.length; i++) {
  // 		if(colors[i]) {
  // 			squares[i].style.background = colors[i];
  // 		}
  // 		else {
  // 			squares[i].style.display = "none";
  // 		}
  // 	}
  // });
  //
  // // Hard Button Logic
  // hardButton.addEventListener("click", function(){
  // 	hardButton.classList.add("selected");
  // 	easyButton.classList.remove("selected");
  // 	numSquares = 6;
  // 	colors = generateColors(numSquares);
  // 	pickedColor = pickColor();
  // 	colorDisplay.textContent = pickedColor;
  // 	for(i = 0; i < squares.length; i++) {
  //       squares[i].style.background = colors[i];
  //       squares[i].style.display = "block";
  // 	}
  // });

  // Reset Button Logic

 resetButton.addEventListener("click", function(){
   reset();
 // 	// Generate new colors
 // 	colors = generateColors(numSquares);
 // 	// pick a new random colr from the array
 // 	pickedColor = pickColor();
 // 	// change color display to match new color
 // 	colorDisplay.textContent = pickedColor;
  // messageDisplay.textContent = "";
  // this.textContent = "New Colors";
 // 	// change colors of squares
 // 	for(i = 0; i < squares.length; i++) {
 // 		squares[i].style.background = colors[i];
 // 	}
 // 	h1.style.background = "#26A8D4";
 });




 for(i = 0; i < squares.length; i++) {
 	// add initial colors to squares
 	squares[i].style.background = colors[i];
 	// add click listeners to squares
 	squares[i].addEventListener("click", function(){
 		// grab color of clicked square
 		var clickedColor = this.style.background;
 		// Compare colors
 		if(clickedColor === pickedColor) {
 			messageDisplay.textContent = "Correct!";
 			changeColor(clickedColor);
 			h1.style.background = clickedColor;
 			resetButton.textContent = "Play Again?";
 		}
 		else {
 			this.style.background = "#141414";
 			messageDisplay.textContent = "Try Again!";
 		}
 	});
 }

 function changeColor(color) {
 	// loop through all squares
 	for(i = 0; i < squares.length; i++) {
 		// change square colors to correct colors
 		squares[i].style.background = color;
 	}
 }

 function pickColor() {

 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateColors(num) {
 	// Make an array
 	var arr = [];
 	// repaet num times
 	for(var i = 0; i < num; i++) {
 		// get random color and push into arr
 		arr.push(randomColor());

 	}
 	// return the array
 	return arr;
 }

 function randomColor() {
 	// pick "red" from 0-255
 	var r = Math.floor(Math.random() * 256);
 	// pick "green" from 0-255
 	var g = Math.floor(Math.random() * 256);
 	// pick "blue" from 0-255
 	var b = Math.floor(Math.random() * 256);

 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }
