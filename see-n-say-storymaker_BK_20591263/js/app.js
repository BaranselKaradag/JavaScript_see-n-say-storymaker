// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
function speakNow() {
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
}
let nouns = ["wizard", "pirate", "ninja", "scientist"];
let verbs = ["dances", "hides", "explores", "invents"];
let adjectives = ["brave", "mysterious", "curious", "clever"];
let objects = ["potion", "treasure", "gadget", "sword"];
let places = ["castle", "island", "laboratory", "dojo"];



// Event listeners for each button
document.getElementById("nounButton").addEventListener("click", function() {
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    textToSpeak += randomNoun + " ";
});

document.getElementById("verbButton").addEventListener("click", function() {
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    textToSpeak += randomVerb + " ";
});

document.getElementById("adjectiveButton").addEventListener("click", function() {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    textToSpeak += randomAdjective + " ";
});

document.getElementById("nounButton2").addEventListener("click", function() {
    let randomObject = objects[Math.floor(Math.random() * objects.length)];
    textToSpeak += randomObject + " ";
});

document.getElementById("placeButton").addEventListener("click", function() {
    let randomPlace = places[Math.floor(Math.random() * places.length)];
    textToSpeak += randomPlace + " ";
});

// Final button to speak the full sentence
document.getElementById("speakButton").addEventListener("click", function() {
    speakNow();
});