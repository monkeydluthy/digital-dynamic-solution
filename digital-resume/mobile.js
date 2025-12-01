const body = document.querySelector("#tech-sup");
const imgContainer = document.createElement("div");

function displayImg(imgUrl, elt) {
  // Apend image container to body
  body.appendChild(imgContainer);

  // Create an img element with imgUrl as a src
  imgContainer.innerHTML = `<img src='${imgUrl}'>`;

  // Add styles to the image container to make it appear
  imgContainer.classList.add("displayMe");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainer.style.animation = "fadeIn .8s";
}

function removeImg() {
  // Fade-Out animation
  imgContainer.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    body.removeChild(imgContainer);
  }, 600);
}

let supportCoach = document.querySelector("#support-coach");
const imgContainer2 = document.createElement("div");

function displayImg2(imgUrl2, elt) {
  // Apend image container to body
  supportCoach.appendChild(imgContainer2);

  // Create an img element with imgUrl as a src
  imgContainer2.innerHTML = `<img src='${imgUrl2}'>`;

  // Add styles to the image container to make it appear
  imgContainer2.classList.add("displayMe2");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainer2.style.animation = "fadeIn .8s";
}

function removeImg2() {
  // Fade-Out animation
  imgContainer2.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    supportCoach.removeChild(imgContainer2);
  }, 600);
}

let crt = document.querySelector("#crt");
const imgContainerCrt = document.createElement("div");

function displayImgCrt(imgUrlCrt, elt) {
  // Apend image container to body
  crt.appendChild(imgContainerCrt);

  // Create an img element with imgUrl as a src
  imgContainerCrt.innerHTML = `<img src='${imgUrlCrt}'>`;

  // Add styles to the image container to make it appear
  imgContainerCrt.classList.add("displayMeCrt");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerCrt.style.animation = "fadeIn .8s";
}

function removeImgCrt() {
  // Fade-Out animation
  imgContainerCrt.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    crt.removeChild(imgContainerCrt);
  }, 600);
}

let ambassador = document.querySelector("#tech-ambassador");
const imgContainerAmbassador = document.createElement("div");

function displayImgAmbassador(imgUrlAmbassador, elt) {
  // Apend image container to body
  ambassador.appendChild(imgContainerAmbassador);

  // Create an img element with imgUrl as a src
  imgContainerAmbassador.innerHTML = `<img src='${imgUrlAmbassador}'>`;

  // Add styles to the image container to make it appear
  imgContainerAmbassador.classList.add("displayMeAmbassador");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerAmbassador.style.animation = "fadeIn .8s";
}

function removeImgAmbassador() {
  // Fade-Out animation
  imgContainerAmbassador.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    ambassador.removeChild(imgContainerAmbassador);
  }, 600);
}

let techrep = document.querySelector("#tech-rep");
const imgContainerTechRep = document.createElement("div");

function displayImgTechRep(imgUrlTechRep, elt) {
  // Apend image container to body
  techrep.appendChild(imgContainerTechRep);

  // Create an img element with imgUrl as a src
  imgContainerTechRep.innerHTML = `<img src='${imgUrlTechRep}'>`;

  // Add styles to the image container to make it appear
  imgContainerTechRep.classList.add("displayMeTechRep");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerTechRep.style.animation = "fadeIn .8s";
}

function removeImgTechRep() {
  // Fade-Out animation
  imgContainerTechRep.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    techrep.removeChild(imgContainerTechRep);
  }, 600);
}

let csrep = document.querySelector("#cs-rep");
const imgContainerCSRep = document.createElement("div");

function displayImgCSRep(imgUrlCSRep, elt) {
  // Apend image container to body
  csrep.appendChild(imgContainerCSRep);

  // Create an img element with imgUrl as a src
  imgContainerCSRep.innerHTML = `<img src='${imgUrlCSRep}'>`;

  // Add styles to the image container to make it appear
  imgContainerCSRep.classList.add("displayMeCSRep");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerCSRep.style.animation = "fadeIn .8s";
}

function removeImgCSRep() {
  // Fade-Out animation
  imgContainerCSRep.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    csrep.removeChild(imgContainerCSRep);
  }, 600);
}

let creativBlock = document.querySelector("#creativ-block");
const imgContainerCB = document.createElement("div");

function displayImgCB(imgUrlCB, elt) {
  // Apend image container to body
  creativBlock.appendChild(imgContainerCB);

  // Create an img element with imgUrl as a src
  imgContainerCB.innerHTML = `<img src='${imgUrlCB}'>`;

  // Add styles to the image container to make it appear
  imgContainerCB.classList.add("displayMeCB");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerCB.style.animation = "fadeIn .8s";
}

function removeImgCB() {
  // Fade-Out animation
  imgContainerCB.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    creativBlock.removeChild(imgContainerCB);
  }, 600);
}

let slidersBar = document.querySelector("#sliders-bar");
const imgContainerSlidersBar = document.createElement("div");

function displayImgSlidersBar(imgUrlSlidersBar, elt) {
  // Apend image container to body
  slidersBar.appendChild(imgContainerSlidersBar);

  // Create an img element with imgUrl as a src
  imgContainerSlidersBar.innerHTML = `<img src='${imgUrlSlidersBar}'>`;

  // Add styles to the image container to make it appear
  imgContainerSlidersBar.classList.add("displayMeSlidersBar");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerSlidersBar.style.animation = "fadeIn .8s";
}

function removeImgSlidersBar() {
  // Fade-Out animation
  imgContainerSlidersBar.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    slidersBar.removeChild(imgContainerSlidersBar);
  }, 800);
}

let lavishRepublic = document.querySelector("#lavish-republic");
const imgContainerLavish = document.createElement("div");

function displayImgLavish(imgUrlLavish, elt) {
  // Apend image container to body
  lavishRepublic.appendChild(imgContainerLavish);

  // Create an img element with imgUrl as a src
  imgContainerLavish.innerHTML = `<img src='${imgUrlLavish}'>`;

  // Add styles to the image container to make it appear
  imgContainerLavish.classList.add("displayMeLavish");

  //Positioning
  // imgContainer.style.top = (elt.offsetTop = 40) + 'px';
  // imgContainer.style.left = elt.offsetLeft + 'px';

  // Fade-in animation
  imgContainerLavish.style.animation = "fadeIn .8s";
}

function removeImgLavish() {
  // Fade-Out animation
  imgContainerLavish.style.animation = "fadeOut .8s";

  // Destroy image container after fade-out
  setTimeout(() => {
    lavishRepublic.removeChild(imgContainerLavish);
  }, 600);
}
