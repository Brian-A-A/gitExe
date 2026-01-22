let display = document.getElementById("display");

document.getElementById("heater-1").addEventListener("click", () => {
  document.getElementById("Q").play();
  display.innerHTML = "Heater 1";
});

document.getElementById("heater-2").addEventListener("click", () => {
  document.getElementById("W").play();
  display.innerHTML = "Heater 2";
});

document.getElementById("heater-3").addEventListener("click", () => {
  document.getElementById("E").play();
  display.innerHTML = "Heater 3";
});

document.getElementById("heater-4").addEventListener("click", () => {
  document.getElementById("A").play();
  display.innerHTML = "Heater 4";
});

document.getElementById("clap").addEventListener("click", () => {
  document.getElementById("S").play();
  display.innerHTML = "Clap";
});

document.getElementById("open-HH").addEventListener("click", () => {
  document.getElementById("D").play();
  display.innerHTML = "Open-HH";
});

document.getElementById("kick-n-hat").addEventListener("click", () => {
  document.getElementById("Z").play();
  display.innerHTML = "Kick-n-Hat";
});

document.getElementById("kick").addEventListener("click", () => {
  document.getElementById("X").play();
  display.innerHTML = "Kick";
});

document.getElementById("closed-HH").addEventListener("click", () => {
  document.getElementById("C").play();
  display.innerHTML = "Closed-HH";
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);

  if (pad) {
    pad.classList.add("active");
    pad.click();
  }
  qqqq;
});

document.addEventListener("keyup", () => {
  document
    .querySelectorAll(".drum-pad")
    .forEach((pad) => pad.classList.remove("active"));
});
