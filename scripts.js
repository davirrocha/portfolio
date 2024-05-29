let aparecerText = document.querySelector(".list-projects")
let title = document.querySelector("#title")
let text = document.querySelector("#description")

aparecerText.addEventListener("mouseover", function () {
    title.style.display = "block"
    text.style.display = "block"

})

aparecerText.addEventListener("mouseout", function () {
    title.style.display = "none"
    text.style.display = "none"
})





