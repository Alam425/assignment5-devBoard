const overflowText = document.querySelectorAll(".overflowText")
overflowText.forEach(text => {
    text.addEventListener("mouseenter", function () {
        text.classList.remove("line-clamp-2")
    })
    text.addEventListener("mouseout", function () {
        text.classList.add("line-clamp-2")
    })
})  