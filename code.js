test = new Date();
month = test.getMonth();
month = (month * 1) + 1;
day = test.getDate();
year = test.getFullYear();
// document.write("<p> ",month,"/",day,"/",year," </p>");

var narration = ["A long, long time ago, in a galaxy far, far away, you are a prisoner on a maximum security automated galactic prison ship and you seem to have forgotten everything about your past and who you are",
 "For the first time in years, a solar flare causes a power outage on the ship and the locks are disabled...what do you do?", 
 "You notice that the oxygen generators are no longer working… you estimate that you have about 10 mins of oxygen and set a timer on your watch", 
 "The prison wardens back on the planet most likely know that all of the prisoners escaped from their cells into the main portion of the ship (you also know that there are escape pods somewhere on the ship: you want to find one and get back home)", 
 "You hear someone coming...what do you do? You have two options: approach or avoid the sound", "You keep probing around for the escape pods. About 100 ft down the hall you see flashing blue and red buttons which could possibly open the door in front of you: They look ominous, but you know that you have to press one of them to open the door.What do you do? ", 
 "Turns out that the blue button calls an automated guard and it drugs you. You are able to avoid it but you pass out for a minute", "turns out that the red button opens the door. However, the door creates a loud metallic scratching sound as it opens so you better run away to make sure that no one comes looking for you", 
 "As you stealthily make your way down the hallway, you see other prisoners. Do you want to:", 
 "They knock you out and you pass out for a minute", 
 "You survive and keep going", 
 "You see a circulating blue light on top of an object that is moving in the same direction as you. Do you:", 
 "Oh no, it’s actually a guard! Fortunately for you, instead of killing you on the spot, it knocks you out for a minute, then loses power and shuts down.", 
 "You survive, YAY :D", 
 "Ahead you see a constant purple light. Do you:", 
 "It is where the escape pods are", 
 "You could probably be prompted by the same sounds and lights as before", 
 "Hooray! You have reached the escape pods! A few of them are missing, so there must be a way to get off the ship.", 
 "You see a control panel for the escape pod nearest to you. It has several buttons, but none of them are labelled. You focus on the 3 main buttons: the blue, green and red ones. You want to open the door first so that you can get inside. Which button do you press?", 
 "Correct! It opens", 
 "Gears click but nothing else happens", 
 "That escape pod is launched away. You find a new one.", 
 "Once inside, you see a similar control panel. However, this one also has an input bar (for the coordinates of the final destination) You want to close the door. Which button do you push now?", 
 "red button flashes, but nothing else changes", 
 "door closes behind you",
 "Now the input bar flashes, and you select the nearest coordinates, labeled 'Home.' Good job! You have finished the game!"];
var choices = [
  [{next: 1, text: "Continue"}],
  [{next: 2, text: "Get up"},{next:0,text:"Go back to sleep"}],
  [{next: 1, text:"Continue"}]
];

var stage=0;

function myFunction(index) {
	stage=stage%narration.length;
	var demoElement = document.getElementById("demo");
	var hist=document.getElementById("history");
	var newel = document.createElement("div");
	newel.innerText = narration[stage];
	hist.insertBefore(newel, hist.firstChild);
	// hist.removeChild(newel);
	//hist.innerHTML = "<p>earioghoer;h</p>" + hist.innerHTML;
    clearHidden();

	stage = index; //EDIT THIS LATER
    var buttons=document.getElementById("buttons");
	clearButtons(buttons);
	for(var i=0;i<choices[stage].length;i++){ (function(_i) {
		var newButton=document.createElement("div");
		newButton.className="demo";
		newButton.onclick=function(){
			myFunction(choices[stage][_i].next);
		};
		newButton.innerText=choices[stage][_i].text;

		var newContainer=document.createElement("div");
		newContainer.appendChild(newButton);
		buttons.appendChild(newContainer);
	}(i)) }

}

function clearButtons(buttons){
	while (buttons.firstChild) buttons.removeChild(buttons.firstChild);
}

function clearHidden(){
	var list=document.getElementById("history").childNodes;
	for(var i=0; i<list.length; i++) {
	    if (list[i].nodeName.toLowerCase() == 'div') {
	         if(i>5) document.getElementById("history").removeChild(list[i]);
	     }
	}
}
