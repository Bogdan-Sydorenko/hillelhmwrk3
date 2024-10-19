const buttonElem = document.querySelector("#container")

buttonElem.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        console.log(`You click on ${event.target.id}`)
    }
})


