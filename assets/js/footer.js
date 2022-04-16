const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  let y = window.scrollY;

  if (y >= 100) {
    footer.classList.add("disappear");
    return;
  } else {
    footer.classList.remove("disappear");
  }
});
