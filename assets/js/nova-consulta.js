const novaConsulta = document.getElementById("btn-novaConsulta");
const lista = document.querySelectorAll(".footer__list__option__item");

novaConsulta.addEventListener("click", () => {
  console.log("click");
  lista.forEach((item) => {
    const visibility = item.getAttribute("data-visible");
    if (visibility == "false") {
      item.setAttribute("data-visible", "true");
    } else {
      item.setAttribute("data-visible", "false");
    }
  });
});
