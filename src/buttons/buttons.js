var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var text = document.getElementById("text");

var button1Clicked = false;
var button2Clicked = false;

function show_image(src, width, height) {
  var menu = document.querySelector(".menu");
  var container = document.createElement("div");
  container.classList.add("image-container");
  var img = document.createElement("img");
  img.src = src;
  img.style.width = width + "px";
  img.style.height = height + "px";
  container.appendChild(img);
  menu.appendChild(container);
  container.style.display = "flex";

  var otherButtons = document.querySelectorAll(".menu button:not(#button2)");
  otherButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      container.style.display = "none";
    });
  });
}

button1.addEventListener("click", function() {
  if (!button1Clicked) {
    displayText("IoT is the network of physical objects or groups of objects that are equipped with sensors, processing capabilities, software, \n\nand other technologies to connect and exchange information with other devices and \n\nsystems via the internet or other communication networks ");
    button1Clicked = true;
  }
});

button2.addEventListener("click", function() {
  displayText("");
});

function displayText(textToDisplay) {
  text.innerHTML = textToDisplay;
  text.style.display = "block";
}

function displayText(text) {
  var menu = document.querySelector(".menu");
  var container = document.createElement("div");
  container.classList.add("text-container");
  container.innerHTML = text.replace(/\n/g, "<br>");
  menu.appendChild(container);
}

var button3 = document.querySelector("#button3");
button3.addEventListener("click", function() {
  window.location.href = "/file/introduction/explanation.html";
});