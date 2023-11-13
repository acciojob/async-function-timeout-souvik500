//your JS code here. If required.
// Get the input elements
consttextInput = document.getElementById("text");
constdelayInput = document.getElementById("delay");

// Get the output element
constoutputDiv = document.getElementById("output");

// Create the async function
async function showMessage() {

 // Get the text and delay values
 consttext = textInput.value;
 constdelay = Number(delayInput.value);

 // Wait for the delay
 awaitdelay(delay);

 // Show the message
 outputDiv.innerHTML = text;
}

// Add an event listener to the button
constbtn = document.getElementById("btn");
btn.addEventListener("click", showMessage);