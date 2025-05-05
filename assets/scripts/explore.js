// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

function init() {
  // TODO
  
  let voices = synth.getVoices();
  if(voices.length == 0){
    synth.onvoiceschanged = () =>{
      voices = synth.getVoices();
      fillDropdown(voices);
    }
  }else{
    fillDropdown(voices);
  }
  
  const pressToTalk = document.getElementsByTagName('button')[0];
  pressToTalk.addEventListener('click', speaking);
}

function fillDropdown(voices){
  const dropdown = document.getElementById('voice-select');
  voices.forEach(voice =>{
    const option = document.createElement('option');
    option.value = voice.voiceURI;
    option.text = voice.name;
    dropdown.add(option);
  });
}

function speaking(){
  const textToSpeak = document.getElementById('text-to-speak');

  const voiceSelect = document.getElementById('voice-select');

  const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);

  utterThis.voice = synth.getVoices().find(voice => voice.voiceURI === voiceSelect.value);

  const image = document.getElementsByTagName('img')[0];

  utterThis.onstart = () =>{
    image.src = 'assets/images/smiling-open.png';
  }
  utterThis.onend = () =>{
    image.src = 'assets/images/smiling.png';
  }
  
  synth.speak(utterThis);
}