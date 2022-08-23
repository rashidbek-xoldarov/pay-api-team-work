const elNavbarBtn = document.querySelector(".burger-btn");
const elXbtn = document.querySelector(".x-btn");
const elNavbar = document.querySelector(".sitenav");
console.log(elNavbarBtn, elNavbar);

elNavbarBtn.addEventListener("click", function () {
  elNavbar.classList.add("sitenav__open");
});

elXbtn.addEventListener("click", function () {
  elNavbar.classList.remove("sitenav__open");
});
