// Getting dom elements:
const durationText = document.querySelector(".duration-text");
const durationList = document.querySelector(".duration-list");
const items = document.querySelectorAll(".item");

// Adding event listners:
durationText.addEventListener("click", (e) => {
  durationList.classList.toggle("active");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    durationText.innerText = item.innerText;
    durationList.classList.remove("active");
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0px";
  } else {
    document.querySelector("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
