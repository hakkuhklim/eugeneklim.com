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
