var randomInput = document.getElementById("randomInput");
var includeZero = document.getElementById("includeZero");
var numberButton = document.getElementById("numberButton");
var randomNumber = document.getElementById("randomNumber");

var multiplier = 0;
var isZero = false;

includeZero.addEventListener("click", function(){
	if(includeZero.checked === false){
		isZero = false;
	}else{
		isZero = true;
	}
});

numberButton.addEventListener("click", function(){
	if(!isZero){
		rng1();
	}else{
		rng0();
	}
});

randomInput.addEventListener("change", function(){
	multiplier = Number(randomInput.value);
});

function rng1(){
	randomNumber.innerHTML = Math.ceil(Math.random()*multiplier);
}

function rng0(){
	randomNumber.innerHTML = Math.floor(Math.random()*multiplier);
}


