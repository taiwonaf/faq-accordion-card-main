const container = document.querySelectorAll(".container");

container.forEach(contain => {
    contain.addEventListener("click", () => {
        contain.classList.toggle("active")
    })
})