let projectItems = document.querySelectorAll(".list-projects");

projectItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        let title = item.querySelector("#title");
        let text = item.querySelector("#description");
        let img = item.querySelector(".img-git")
        title.style.display = "block";
        text.style.display = "block";
        img.style.display = "block"
    });

    item.addEventListener("mouseout", function () {
        let title = item.querySelector("#title");
        let text = item.querySelector("#description");
        let img = item.querySelector(".img-git")
        title.style.display = "none";
        text.style.display = "none";
        img.style.display = "none"
    });
})





