// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
// TODO
const selectHorn = document.getElementById('horn-select');
selectHorn.addEventListener("change", changeImg);

const controlVolume = document.getElementById('volume');
controlVolume.addEventListener("input", changeVolume);

const soundButton = document.querySelector('button');
soundButton.addEventListener("click", playSound);

}

function changeImg(){
const selectHorn = document.getElementById('horn-select');
const image = document.querySelector('#expose img');
if(selectHorn.value == "air-horn"){
  image.src = "assets/images/air-horn.svg"
  image.alt = 'Air Horn'
}
else if(selectHorn.value == "car-horn"){
  image.src = "assets/images/car-horn.svg"
  image.alt = 'Car Horn'
}
else if(selectHorn.value == "party-horn"){
  image.src = "assets/images/party-horn.svg"
  image.alt = 'Party Horn'
}
else{
  image.src = 'assets/images/no-image.png';
  image.alt = 'No image selected';
}
}

function changeVolume(){

const controlVolume = document.getElementById('volume');

//change volume
const audio = document.querySelector("audio");
audio.volume = controlVolume.value/100;

// change icon
const volumeIcon = document.querySelector('#volume-controls img');

switch(true){
  case (controlVolume.value == 0):
    volumeIcon.src = "assets/icons/volume-level-0.svg";
    volumeIcon.alt = "Volume level 0";
    break;
  case (1 <= controlVolume.value && controlVolume.value < 33):
    volumeIcon.src = "assets/icons/volume-level-1.svg";
    volumeIcon.alt = "Volume level 1";
    break;
  case (33 <= controlVolume.value && controlVolume.value < 67):
    volumeIcon.src = "assets/icons/volume-level-2.svg";
    volumeIcon.alt = "Volume level 2";
    break;
  case (67 <= controlVolume.value):
    volumeIcon.src = "assets/icons/volume-level-3.svg";
    volumeIcon.alt = "Volume level 3";
    break;
}
}

function playSound(){
  const selectHorn = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const jsConfetti = new JSConfetti()

  switch(true){
    case (selectHorn.value == "air-horn"):
      audio.src = "assets/audio/air-horn.mp3";
      break;
    case (selectHorn.value == "car-horn"):
      audio.src = "assets/audio/car-horn.mp3";
      break;
    case (selectHorn.value == "party-horn"):
      audio.src = "assets/audio/party-horn.mp3";
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiRadius: 600,
        confettiNumber: 500,
     })
      break;
  }
  audio.play();
}
