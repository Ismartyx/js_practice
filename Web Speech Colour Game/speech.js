import { handleResult } from "./handlers";
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors.map(color =>
    `<span class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background: ${color};">${color}</span>`
  ).join('');
}




window.speechRecognition = window.speechRecognition || webkitSpeechRecognition;

function start() {
  if (!('speechRecognition' in window)) {
    console.log('Sorry your browser does not support speech reco.');
    return;
  }
  console.log('Starting...');

  const recognition = new speechRecognition();
  recognition.continuous = true;
  recognition.intermResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);