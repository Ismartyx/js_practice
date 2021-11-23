const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    event.preventDefault();
    const shChP = confirm('This website might be malicious!, do you wish to proceed?');
    if (shChP) {
        window.location = event.currentTarget.href;
    }
})

const signuoForm = document.querySelector('[name="signup"]');

signuoForm.addEventListener('submit', function(event) {
const name = event.currentTarget.name.value;
if(name.includes('chad')) {
    alert('sorry bro');
    event.preventDefault();
}
})

function logevent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
    
}

signuoForm.name.addEventListener('keyup', logevent);
signuoForm.name.addEventListener('keydown', logevent);
signuoForm.name.addEventListener('focus', logevent);
signuoForm.name.addEventListener('blur', logevent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
