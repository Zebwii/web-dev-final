"use strict";

var selected =  1;
window.onload = function(){
	document.getElementById("playbutton").addEventListener("click",initGame);
	console.log("loaded");
}
function initGame(){
	var game = document.getElementById("game");
	game.removeChild(document.getElementById("playbutton"));
	var grid = document.createElement("div");
	grid.id = "grid";
	for(var i = 0; i<5; i++){
		for(var j = 0; j<5; j++){
			var square = document.createElement("div");
			square.className = "blank";
			square.id = String(i)+String(j);
			square.addEventListener("mouseover",sqMouseOver);
			square.addEventListener("click",sqClick);
			square.style.top = (60*i) + "px";
			square.style.left = (60*j) + "px";
			grid.append(square);
		}
	}
	game.append(grid);
	for(var i = 0; i < 4; i++){
		var bench = document.createElement("div");
		game.append(bench);
	}
	var woodButton = document.createElement("button");
	game.append(woodButton);
	woodButton.className = "gamebutton";
	woodButton.addEventListener("click",select);
	woodButton.value = 1;
	woodButton.style.bottom = "10px";
	woodButton.style.right = "10px";
	woodButton.innerHTML = "Wood";

	var stoneButton = document.createElement("button");
	game.append(stoneButton);
	stoneButton.className = "gamebutton";
	stoneButton.addEventListener("click",select);
	stoneButton.value = 2;
	stoneButton.style.bottom = "10px";
	stoneButton.style.right = "70px";
	stoneButton.innerHTML = "Stone";

	var metalButton = document.createElement("button");
	game.append(metalButton);
	metalButton.className = "gamebutton";
	metalButton.addEventListener("click",select);
	metalButton.value = 3;
	metalButton.style.bottom = "10px";
	metalButton.style.right = "130px";
	metalButton.innerHTML = "Metal";

	/*var stoneButton = document.createElement("button");
	stoneButton.addEventListener("click",select);
	stoneButton.value = 2;*/




}
function startGame(){


}
function loadScreen(){

}
function addEnemy(){

}
function sqMouseOver(){

}
function sqClick(){
	if(this.className === "blank"){
		if(selected == 1){
			this.className = "wood";
		}else if(selected == 2){
			this.className = "stone";
		}else{
			this.className = "metal";
		}
	}
}
function select(){
	selected=this.value;
}
