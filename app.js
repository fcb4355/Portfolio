const bntUp = document.querySelector(".btn_to_top");


window.onscroll = function () {
    if (window.scrollY >= 1000) {
        bntUp.classList.add("show")
    } else {
        bntUp.classList.remove("show")
    }

}


bntUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})