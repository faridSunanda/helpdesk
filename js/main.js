//   Header Scroll
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("shadow-md", "bg-white/95", "backdrop-blur-sm");
  } else {
    header.classList.remove("shadow-md", "bg-white/95", "backdrop-blur-sm");
  }
});

// Header toggle
const btn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

// Modal After Sending
const buttonOpenModalAfterSending = document.getElementById(
  "buttonOpenModalAfterSending"
);
const buttonCloseModalAfterSending = document.getElementById(
  "buttonCloseModalAfterSending"
);
const boxModalAfterSending = document.getElementById("boxModalAfterSending");
const modalAfterSending = document.getElementById("modalAfterSending");
buttonOpenModalAfterSending.addEventListener("click", () => {
  boxModalAfterSending.classList.remove("hidden");
  setTimeout(() => {
    modalAfterSending.classList.remove("scale-95", "opacity-0");
    modalAfterSending.classList.add("scale-100", "opacity-100");
  }, 50);
});
buttonCloseModalAfterSending.addEventListener("click", () => {
  modalAfterSending.classList.remove("scale-100", "opacity-100");
  modalAfterSending.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    boxModalAfterSending.classList.add("hidden");
  }, 300);
});
