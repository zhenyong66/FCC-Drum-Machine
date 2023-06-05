var input = document.getElementById("Heater-1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Q") {
    event.preventDefault();
    document.getElementById("Q").click();
  }
})

var input=document.getElementById("Heater-2");
input.addEventListener("keypress", function(event) {
  if (event.key === "W") {
    event.preventDefault();
    document.getElementById("W").click();
  }
})

var input=document.getElementById("Heater-3");
input.addEventListener("keypress", function(event) {
  if (event.key === "E") {
    event.preventDefault();
    document.getElementById("E").click();
  }
})

var input=document.getElementById("Heater-4");
input.addEventListener("keypress", function(event) {
  if (event.key === "A") {
    event.preventDefault();
    document.getElementById("A").click();
  }
})

var input=document.getElementById("Clap");
input.addEventListener("keypress", function(event) {
  if (event.key === "S") {
    event.preventDefault();
    document.getElementById("S").click();
  }
})

var input=document.getElementById("Open-HH");
input.addEventListener("keypress", function(event) {
  if (event.key === "D") {
    event.preventDefault();
    document.getElementById("D").click();
  }
})

var input=document.getElementById("Kick-n-Hat");
input.addEventListener("keypress", function(event) {
  if (event.key === "Z") {
    event.preventDefault();
    document.getElementById("Z").click();
  }
})

var input=document.getElementById("Kick");
input.addEventListener("keypress", function(event) {
  if (event.key === "X") {
    event.preventDefault();
    document.getElementById("X").click();
  }
})

var input=document.getElementById("Closed-HH");
input.addEventListener("keypress", function(event) {
  if (event.key === "C") {
    event.preventDefault();
    document.getElementById("C").click();
  }
})

var input=document.getElementById("Closed-HH");
input.addEventListener("keypress", function(event) {
  if (event.key === "R") {
    event.preventDefault();
    document.getElementById("R").click();
  }
})

function displayString(audio_name) {
  document.getElementById("display").innerHTML=audio_name;
}