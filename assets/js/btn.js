const btn = document.getElementById("floatbtn");
const options = document.querySelectorAll(".floating__hidden__item");

console.log(options);

btn.addEventListener('click', () => {
    options.forEach(element => {
        const visibility = element.getAttribute("data-visible");
        if (visibility == "false") {
            element.setAttribute("data-visible", "true");
        } else {
            element.setAttribute("data-visible", "false");
        }
    })
})