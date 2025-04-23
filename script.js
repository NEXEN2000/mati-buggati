console.log("Mateusz ma GYATT RIZZ");

const kliker = document.getElementById("kliker");
const clickSound = new Audio("sounds/nom_c_06-89142.mp3");

kliker.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
});