let images = Array.from(document.querySelectorAll(".card img"));

let lightContainer = document.querySelector(".light-container");
let boxModel = document.querySelector(".light-container .box");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let closeBtn = document.getElementById("close");

let currentIndexImg;

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let currentImgSrc = e.target.getAttribute("src");
    lightContainer.classList.remove("d-none");
    boxModel.style.backgroundImage = `url(${currentImgSrc})`;

    currentIndexImg = images.indexOf(e.target);
  });
});

closeBtn.addEventListener("click", closeModel);
nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

//! closeModel
function closeModel() {
  lightContainer.classList.add("d-none");
}

function moveNext() {
  currentIndexImg++;
  if (currentIndexImg >= images.length) {
    currentIndexImg = 0;
  }
  boxModel.style.backgroundImage = `url(${images[currentIndexImg].src})`;
}

function movePrev() {
  currentIndexImg--;
  if (currentIndexImg < 0) {
    currentIndexImg = images.length - 1;
  }
  boxModel.style.backgroundImage = `url(${images[currentIndexImg].src})`;
}

document.addEventListener("keydown", (e) => {
  if (!lightContainer.classList.contains("d-none")) {
    if (e.key === "Escape") {
      closeModel();
    } else if (e.key === "ArrowLeft") {
      movePrev();
    } else if (e.key === "ArrowRight") {
      moveNext();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("light-container")) {
    lightContainer.classList.add("d-none");
  }
});
