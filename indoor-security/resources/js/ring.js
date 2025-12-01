
let featureParagraph = document.getElementById('features');
let featureList = document.getElementById('feature-list');
let item1 = document.querySelector("[data-item1]");


featureParagraph.addEventListener('click', function() {
  if (featureList.style.display === "flex") {
    featureList.style.display = "none";
  } else {
    featureList.style.display = "flex";
    featureList.style.flexDirection = "column";
    item1.style.height = "100%";
  }
});

let featureParagraph2 = document.getElementById('features-2');
let nextFeatureList = document.getElementById('feature-list-2');
let item2 = document.querySelector("[data-item2]");

featureParagraph2.addEventListener('click', function() {
  if (nextFeatureList.style.display === "flex") {
    nextFeatureList.style.display = "none";
  } else {
    nextFeatureList.style.display = "flex";
    nextFeatureList.style.flexDirection = "column";
    item2.style.height = "100%";
  }
});

let featureParagraph3 = document.getElementById('features-3');
let thirdFeatureList = document.getElementById('feature-list-3');
let item3 = document.querySelector("[data-item3]");

featureParagraph3.addEventListener('click', function() {
  if (thirdFeatureList.style.display === "flex") {
    thirdFeatureList.style.display = "none";
  } else {
    thirdFeatureList.style.display = "flex";
    thirdFeatureList.style.flexDirection = "column";
    item3.style.height = "100%";
  }
});

let featureParagraph4 = document.getElementById('features-4');
let fourthFeatureList = document.getElementById('feature-list-4');
let item4 = document.querySelector("[data-item4]");

featureParagraph4.addEventListener('click', function() {
  if (fourthFeatureList.style.display === "flex") {
    fourthFeatureList.style.display = "none";
  } else {
    fourthFeatureList.style.display = "flex";
    fourthFeatureList.style.flexDirection = "column";
    item4.style.height = "100%";
  }
});

let productOne = document.getElementById('product-1');
productOne.addEventListener('click', () => {
  location.href = "https://amzn.to/40CjSNH";
})

let productTwo = document.getElementById('product-2');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3QCfPfL";
})

let productThree = document.getElementById('product-3');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3R1ZHWm";
})

let productFour = document.getElementById('product-4');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/47lfJAo";
})

let productFive = document.getElementById('product-5');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/3MIZ69n";
})

let productSix = document.getElementById('product-6');
productTwo.addEventListener('click', () => {
  location.href = "https://amzn.to/49wYCgt";
})