const webcam = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
const optionsInputs = document.querySelectorAll('.controls input[type="range"]')
// Write a fucntion that will populate the users video
const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption))

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia( { video: {width: 1280, height: 720} } );
  // console.log(stream);
  webcam.srcObject = stream;
  await webcam.play();
  // console.log(webcam.videoWidth, webcam.videoHeight);
  canvas.width = webcam.videoWidth;
  canvas.height = webcam.videoHeight;
  faceCanvas.width = webcam.videoWidth;
  faceCanvas.height = webcam.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(webcam);
  faces.forEach(drawFace);
  faces.forEach(censor);
  
  // console.log(faces);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  // console.log(face);
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 4;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    webcam, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from?
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}



populateVideo().then(detect);