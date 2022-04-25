const btn = document.getElementById("floatbtn");
const options = document.querySelectorAll(".floating__hidden__item");
const modal = document.querySelector(".floating-modal");

btn.addEventListener('click', () => {
    options.forEach(element => {
        const visibility = element.getAttribute("data-visible");
        if (visibility == "false") {
            element.setAttribute("data-visible", "true");
            modal.style.display = 'block';
        } else {
            element.setAttribute("data-visible", "false");
            modal.style.display = 'none';
        }
    })
})