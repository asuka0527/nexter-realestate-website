const navSidebar = document.querySelector(".nav__container");
const btnSidebar = document.querySelector(".nav-btn");

const btnClodeModal = document.querySelector(".btn--close-modal");
const btnOpenModal = document.querySelectorAll(".home__btn");

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const btnContact = document.querySelector(".btn-contact");

btnSidebar.addEventListener("click", function (e) {
  navSidebar.classList.toggle("hidden");
});

btnSidebar.addEventListener("mouseover", function (e) {
  navSidebar.classList.remove("hidden");
});
navSidebar.addEventListener("mouseover", function (e) {
  console.log(e.target);
  navSidebar.classList.remove("hidden");
});

navSidebar.addEventListener("mouseout", function (e) {
  console.log(e.target);
  navSidebar.classList.add("hidden");
});

btnClodeModal.addEventListener("click", function (e) {
  console.log(e.target);
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

btnContact.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

document
  .querySelector(".nav-sidebar__links")
  .addEventListener("click", function (e) {
    e.preventDefault();

    console.log(e.target);
    // Matching strategy

    if (e.target.classList.contains("nav-sidebar__link")) {
      const id = e.target.getAttribute("href");

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();

  console.log(e.target);
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".header__btn").addEventListener("click", function (e) {
  e.preventDefault();

  const id = e.target.getAttribute("href");

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
