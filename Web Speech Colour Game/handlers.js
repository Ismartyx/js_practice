import { isValidColor } from "./colors";

function logwords(results) {
  // console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  // logwords(results);
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  let color = words.toLowerCase();
  color = color.replace(/\s/g, '');
  if(!isValidColor(color)) return;
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log(colorSpan);
  document.body.style.backgroundColor = color;
}