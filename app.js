// Links list
const link1 = document.querySelector(".link1");
// const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
// const link5 = document.querySelector(".link5");
const link6 = document.querySelector(".link6");
const link7 = document.querySelector(".link7");

const mainBlock = document.querySelector(".init-page");
const block1 = document.querySelector(".block1");
// const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
// const block5 = document.querySelector(".block5");
const block6 = document.querySelector(".block6");
const block7 = document.querySelector(".block7");

const linkIcon1 = document.querySelector(".link-icon1");
// const linkIcon2 = document.querySelector(".link-icon2");
const linkIcon3 = document.querySelector(".link-icon3");
const linkIcon4 = document.querySelector(".link-icon4");
// const linkIcon5 = document.querySelector(".link-icon5");
const linkIcon6 = document.querySelector(".link-icon6");
const linkIcon7 = document.querySelector(".link-icon7");

link1.addEventListener("mouseenter", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "none";
    block1.style.display = "block";
    linkIcon1.style.display = "block";
  }
});
link1.addEventListener("mouseout", () => {
  let intViewportWidth = window.innerWidth;
  if (intViewportWidth > 767) {
    mainBlock.style.display = "flex";
    block1.style.display = "none";
    linkIcon1.style.display = "none";
  }
});

// link2.addEventListener("mouseenter", () => {
//   let intViewportWidth = window.innerWidth;

//   if (intViewportWidth > 767) {
//     mainBlock.style.display = "none";
//     block2.style.display = "block";
//     linkIcon2.style.display = "block";
//   }
// });
// link2.addEventListener("mouseout", () => {
//   let intViewportWidth = window.innerWidth;

//   if (intViewportWidth > 767) {
//     mainBlock.style.display = "flex";
//     block2.style.display = "none";
//     linkIcon2.style.display = "none";
//   }
// });

link3.addEventListener("mouseenter", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "none";
    block3.style.display = "block";
    linkIcon3.style.display = "block";
  }
});
link3.addEventListener("mouseout", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "flex";
    block3.style.display = "none";
    linkIcon3.style.display = "none";
  }
});

link4.addEventListener("mouseenter", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "none";
    block4.style.display = "block";
    linkIcon4.style.display = "block";
  }
});
link4.addEventListener("mouseout", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "flex";
    block4.style.display = "none";
    linkIcon4.style.display = "none";
  }
});

// link5.addEventListener("mouseenter", () => {
//   let intViewportWidth = window.innerWidth;

//   if (intViewportWidth > 767) {
//     mainBlock.style.display = "none";
//     block5.style.display = "block";
//     linkIcon5.style.display = "block";
//   }
// });
// link5.addEventListener("mouseout", () => {
//   let intViewportWidth = window.innerWidth;

//   if (intViewportWidth > 767) {
//     mainBlock.style.display = "flex";
//     block5.style.display = "none";
//     linkIcon5.style.display = "none";
//   }
// });

link6.addEventListener("mouseenter", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "none";
    block6.style.display = "block";
    linkIcon6.style.display = "block";
  }
});
link6.addEventListener("mouseout", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "flex";
    block6.style.display = "none";
    linkIcon6.style.display = "none";
  }
});

link7.addEventListener("mouseenter", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "none";
    block7.style.display = "block";
    linkIcon7.style.display = "block";
  }
});
link7.addEventListener("mouseout", () => {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth > 767) {
    mainBlock.style.display = "block";
    block7.style.display = "none";
    linkIcon7.style.display = "none";
  }
});

// BLOTTER - Example 1
// var text = new Blotter.Text("EUGENE KLIMUTS WEB/ GRAPHIC DESIGN/ PHOTO", {
//   family: "'Syne', serif",
//   size: 84,
//   fill: "#202020",
// });

// var material = new Blotter.SlidingDoorMaterial();

// var blotter = new Blotter(material, {
//   texts: text,
// });

// var elem = document.getElementById("plain-text");
// var scope = blotter.forText(text);

// scope.appendTo(elem);

// Buttom more

const btnMore = document.querySelector(".btn-more");
const overlay = document.querySelector(".overlay");
const initPage = document.querySelector(".init-page");
const cvPage = document.querySelector(".cv-page");
const closeIcon = document.querySelector(".icon-img");

const leftBlock = document.querySelector(".box-left");

btnMore.addEventListener("click", () => {
  overlay.style.display = "block";
  initPage.style.display = "none";
  cvPage.style.display = "block";

  let intViewportWidth = window.innerWidth;

  if (intViewportWidth < 767) {
    leftBlock.style.display = "none";
  }
});

closeIcon.addEventListener("click", () => {
  overlay.style.display = "none";
  initPage.style.display = "flex";
  cvPage.style.display = "none";
  leftBlock.style.display = "block";
});

// drawing
const canvas = document.querySelector ("canvas");
canvas.width = window.innerWidth *2;
canvas.height = window.innerHeight *2;

const ctx = canvas.getContext("2d");
ctx.scale(2, 2);

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const img = document.createElement("img");
img.src = "eugene_klim_photo.png";

let currentX = null;
let currentY = null;
let aimX = null;
let aimY = null;

document.addEventListener("mousemove", function(e) {
    aimX = e.pageX;
    aimY = e.pageY;

    if (currentX == null) {
        currentX = aimX;
        currentY = aimY;
    }
});

function draw() {
  if (currentX) {
    ctx.drawImage(
      img,
      currentX - img.width / 8,
      currentY - img.width / 8,
      img.width / 6,
      img.height / 6
    );
  }
currentX = currentX + (aimX - currentX) * 0.1;
  currentY = currentY + (aimY - currentY) * 0.1;
  requestAnimationFrame(draw);
}

draw();
