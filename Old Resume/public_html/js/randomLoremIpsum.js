var randomOutput = document.querySelector("#randomOutput");
var generatorButton = document.querySelector("#generatorButton");
var inputAmount = document.querySelector("#inputAmount");
var divContain = document.querySelector("#contain");
var startOver = document.querySelector("#startOver");
var allSpan = document.getElementsByTagName("span");

var wordArray = ["car ", "foot ", "basketball ", "werewolf ", "mother ", "domino ", "conscious ", "drain ", "honor ", "fried ", "coast ", "agility ", "mask ", "hash ", "perfume ", "cryptic ", "degenerate ", "beehive ", "wisdom ", "cinder ", "spike ", "glossy ", "vinyl ", "conspiracy ", "light ", "coal ", "contortionist ", "annual ", "figurehead ", "church ", "boom ", "book ", "americana ", "curious ", "undersea ", "bacteria ", "annoying ", "crawling ", "republic ", "flop ", "french ", "enormous ", "aggression ", "magnet ", "game ", "artist ", "homesick ", "fence ", "western ", "rastled ", "obsession ", "propellant ", "devoid ", "heater ", "python ", "equipment ", "intimate ", "boulevard ", "eyetooth ", "desolate ", "amateur ", "cunning ", "experiment ", "accomplice ", "program ", "patrol ", "forearm ", "dismemberment ", "blood ", "feudal ", "chunky ", "clunky ", "grown ", "growl ", "homemade ", "equal ", "morbid ", "baloney ", "bologna ", "haunting ", "anxiety ", "flatten ", "seven ", "luxurious ", "shotgun ", "cube ", "gang ", "axe ", "giant ", "glider ", "candymaker ", "brass ", "pretend ", "whisper ", "ultimate ", "cannibal ", "hibernation ", "belly ", "amputate ", "eruption ", "controversial ", "hearse ", "adornment ", "pony ", "gobbling ", "last ", "hidden ", "english ", "metallic ", "normal ", "fuse ", "dynasty ", "calibration ", "hook ", "bringer ", "hope ", "hash ", "container ", "battleground ", "illegal ", "blissfully ", "prophet ", "prop ", "fuzz ", "hot ", "total ", "wizard ", "goat ", "joypop ", "bye ", "giver ", "propeller ", "devour ", "noisemaker ", "duke ", "daisy ", "awkward ", "first ", "nude ", "rude ", "actually ", "groundwave ", "adaptive ", "divinity ", "pesky ", "wolf ", "blasted ", "grenade ", "exhibit ", "baboon ", "knuckles ", "treasure ", "powerless ", "beastly ", "power "];
var amount = 0;

inputAmount.addEventListener("change", function(){
	amount = Number(inputAmount.value)-1;
});

generatorButton.addEventListener("click", function(){
	for(var i=0; i<=amount; i++){
		var newSpan = document.createElement("span");
		var newString = document.createTextNode(wordArray[Math.floor(Math.random()*wordArray.length)]);
		newSpan.appendChild(newString);
		divContain.appendChild(newSpan);

	}
});

startOver.addEventListener("click", function(){
//	restart();

	location.reload();
});

function restart(){		
	var parent = document.getElementById("contain");
	var child = document.getElementsByTagName("span");
	for(var i=0; i<=allSpan.length; i++){		
		parent.removeChild(child[i]);
		allSpan[i].innerHTML = "";
	}
}



