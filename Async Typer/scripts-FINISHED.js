function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandom(min = 20, max = 150, rNumber = Math.random()) {
  return Math.floor(rNumber * (max - min) + min)
}

// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const an of text) {
//     console.log(an);
//     soFar = soFar + an //or soFar += an
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     const aTW = getRandom(typeMin, typeMax);
//     await wait(aTW);
//   }
// }

function draw(el) {
  let index = 10;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const aTW = getRandom(typeMin, typeMax);
    await wait(aTW);
    if (index <= text.length) {
      drawLetter();
    }
  }
  drawLetter();
}

const els = document.querySelectorAll('[data-type]').forEach(draw);

// els.forEach(el => draw(el));