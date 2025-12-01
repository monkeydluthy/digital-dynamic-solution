let box = document.getElementById("box");
let boxp = document.getElementById("boxp");
let box2 = document.getElementById("box-2");
let box2p = document.getElementById("box2p");
let box3 = document.getElementById("box-3");
let box3p = document.getElementById("box3p");
let box4 = document.getElementById("box-4");
let box4p = document.getElementById("box4p");
let box5 = document.getElementById("box-5");
let box5p = document.getElementById("box5p");
let box6 = document.getElementById("box-6");
let box6p = document.getElementById("box6p");
let box7 = document.getElementById("box-7");
let box7p = document.getElementById("box7p");
let box8 = document.getElementById("box-8");
let box8p = document.getElementById("box8p");
let blonding = document.querySelector("[data-blonding]");
let deadEnds = document.querySelector("[data-deadends]");
let events = document.querySelector("[data-events]");
let extend = document.querySelector("[data-extensions]");
let gloss = document.querySelector("[data-gloss]");
let halfblond = document.querySelector("[data-halfblond]");
let keratin = document.querySelector("[data-keratin]");
let roots = document.querySelector("[data-roots]");
let call = document.getElementById("call");

blonding.addEventListener("mouseenter", () => {
  box.style.transitionDuration = "2s";
  box.style.transitionProperty = "background-color";
  boxp.style.transitionDuration = "2s";
  boxp.style.transitionProperty = "color";
  box.style.backgroundColor = "black";
  box.style.color = "white";

  blonding.addEventListener("mouseleave", () => {
    box.style.transitionDuration = "2s";
    box.style.transitionProperty = "background-color";
    box.style.backgroundColor = "transparent";
    box.style.color = "transparent";
  });
});

deadEnds.addEventListener("mouseenter", () => {
  box2.style.transitionDuration = "2s";
  box2.style.transitionProperty = "background-color";
  box2p.style.transitionDuration = "2s";
  box2p.style.transitionProperty = "color";
  box2.style.backgroundColor = "black";
  box2.style.color = "white";

  deadEnds.addEventListener("mouseleave", () => {
    box2.style.transitionDuration = "2s";
    box2.style.transitionProperty = "background-color";
    box2.style.backgroundColor = "transparent";
    box2.style.color = "transparent";
  });
});

events.addEventListener("mouseenter", () => {
  box3.style.transitionDuration = "2s";
  box3.style.transitionProperty = "background-color";
  box3p.style.transitionDuration = "2s";
  box3p.style.transitionProperty = "color";
  box3.style.backgroundColor = "black";
  box3.style.color = "white";

  events.addEventListener("mouseleave", () => {
    box3.style.transitionDuration = "2s";
    box3.style.transitionProperty = "background-color";
    box3.style.backgroundColor = "transparent";
    box3.style.color = "transparent";
  });
});

extend.addEventListener("mouseenter", () => {
  box4.style.transitionDuration = "2s";
  box4.style.transitionProperty = "background-color";
  box4p.style.transitionDuration = "2s";
  box4p.style.transitionProperty = "color";
  box4.style.backgroundColor = "black";
  box4.style.color = "white";

  extend.addEventListener("mouseleave", () => {
    box4.style.transitionDuration = "2s";
    box4.style.transitionProperty = "background-color";
    box4.style.backgroundColor = "transparent";
    box4.style.color = "transparent";
  });
});

gloss.addEventListener("mouseenter", () => {
  box5.style.transitionDuration = "2s";
  box5.style.transitionProperty = "background-color";
  box5p.style.transitionDuration = "2s";
  box5p.style.transitionProperty = "color";
  box5.style.backgroundColor = "black";
  box5.style.color = "white";

  gloss.addEventListener("mouseleave", () => {
    box5.style.transitionDuration = "2s";
    box5.style.transitionProperty = "background-color";
    box5.style.backgroundColor = "transparent";
    box5.style.color = "transparent";
  });
});

halfblond.addEventListener("mouseenter", () => {
  box6.style.transitionDuration = "2s";
  box6.style.transitionProperty = "background-color";
  box6p.style.transitionDuration = "2s";
  box6p.style.transitionProperty = "color";
  box6.style.backgroundColor = "black";
  box6.style.color = "white";

  halfblond.addEventListener("mouseleave", () => {
    box6.style.transitionDuration = "2s";
    box6.style.transitionProperty = "background-color";
    box6.style.backgroundColor = "transparent";
    box6.style.color = "transparent";
  });
});

keratin.addEventListener("mouseenter", () => {
  box7.style.transitionDuration = "2s";
  box7.style.transitionProperty = "background-color";
  box7p.style.transitionDuration = "2s";
  box7p.style.transitionProperty = "color";
  box7.style.backgroundColor = "black";
  box7.style.color = "white";

  keratin.addEventListener("mouseleave", () => {
    box7.style.transitionDuration = "2s";
    box7.style.transitionProperty = "background-color";
    box7.style.backgroundColor = "transparent";
    box7.style.color = "transparent";
  });
});

roots.addEventListener("mouseenter", () => {
  box8.style.transitionDuration = "2s";
  box8.style.transitionProperty = "background-color";
  box8p.style.transitionDuration = "2s";
  box8p.style.transitionProperty = "color";
  box8.style.backgroundColor = "black";
  box8.style.color = "white";

  roots.addEventListener("mouseleave", () => {
    box8.style.transitionDuration = "2s";
    box8.style.transitionProperty = "background-color";
    box8.style.backgroundColor = "transparent";
    box8.style.color = "transparent";
  });
});

call.addEventListener("click", () => {
  location.href = "tel:203-707-7335";
});
