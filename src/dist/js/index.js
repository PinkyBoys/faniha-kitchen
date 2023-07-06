// trigger Navbar

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  const offSet = window.pageYOffset;
  const trigger = window.innerHeight * 0.4;

  if (offSet >= trigger) {
    nav.classList.remove("invisible");
    nav.style.opacity = Math.min((offSet - trigger) / trigger, 1);
  } else {
    nav.classList.add("invisible");
  }
});

// WOW.js init

new WOW().init();

// feather icons

feather.replace();

// popup
