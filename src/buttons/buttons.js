var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var text = document.getElementById("text");

button1.addEventListener("click", function() {
  displayText("Button 1 clicked");
});

button2.addEventListener("click", function() {
  displayText("Button 2 clicked");
});

button3.addEventListener("click", function() {
  displayText("Button 3 clicked");
});

function displayText(textToDisplay) {
  text.innerHTML = textToDisplay;
  text.style.display = "block";
}