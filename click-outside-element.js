const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');


function hCBC(event){
   const button = event.currentTarget.closest('.card');
   console.log(button);
   const imgSrc = document.querySelector('img').src;
   const name = button.querySelector('h2').textContent;
   const desc = button.dataset.description;
modalInner.innerHTML = `
<p class = "desc">${desc}</p>
<img width="400" height="400" src="${imgSrc.replace('300', '600')}" alt="${name}"/>
`;
console.log(modalInner);
modalOuter.classList.add('open');
}

cardButtons.forEach(function hBBC(button) {
    button.addEventListener('click', hCBC);
});

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event2){
const isOutside = !event2.target.closest('.modal-inner');
if (isOutside) {
closeModal();
}
});

window.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        closeModal();
      }
});