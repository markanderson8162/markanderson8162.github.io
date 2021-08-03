var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var title = document.getElementById("title");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
reset();

function init(){

	setupModeButtons();
	setupSquares();


}



function reset(){
		//generate new colors
	// numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick new random color(correct answer)
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.innerHTML = pickedColor;
	//change colors of all 6 squares
	title.style.backgroundColor = "steelblue";
	resetButton.innerHTML = "New Colors";
	messageDisplay.innerHTML = "";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
}

function setupModeButtons(){
	//mode button event listeners (easy and hard)
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.innerHTML === "Easy" ? numSquares = 3: numSquares = 6;
			// if(this.innerHTML === "Easy"){
			// 	numSquares = 3;
			// }else{
			// 	numSquares = 6;
			// }
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click eventListener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to var pickedColor
			//checks for correct answer
			if (clickedColor === pickedColor){
				messageDisplay.innerHTML = "Correct!";
				changeColors(clickedColor);
				title.style.backgroundColor = clickedColor;
				resetButton.innerHTML = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.innerHTML = "Try Again";
			}
		});
	}
}

//displays the color name in the title
colorDisplay.innerHTML = pickedColor;

// easyBtn.addEventListener("click", function(){
// 		resetButton.innerHTML = "New Colors";
// 	title.style.backgroundColor = "steelblue";
// 	messageDisplay.innerHTML = "";
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{

// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 		resetButton.innerHTML = "New Colors";
// 	title.style.backgroundColor = "steelblue";
// 	messageDisplay.innerHTML = "";
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares)
// 	pickedColor = pickColor();
// 	colorDisplay.innerHTML = pickedColor;
// 	for (var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color){
	//loop through all squares
	for (var i=0; i<colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//chooses a random color from the colors array
function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make array to store random colors
	var arr = [];
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red", "green", and "blue" from 0 - 255
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)

	//create a string with the random numbers inside
	return "rgb("+r+", "+g+", "+b+")"
}