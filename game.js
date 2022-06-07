let min_num = JSON.parse(localStorage.getItem("min_num"))
let max_num = JSON.parse(localStorage.getItem("max_num"))
let randomNumber = JSON.parse(localStorage.getItem("randomNumber"))

document.getElementById("check-btn").addEventListener("click", function () {
    let guessNumber = parseInt(document.getElementsByClassName("input-number")[0].value)
    if (!check()) {
        setHint("Error! please check your input")
    } else if (guessNumber === randomNumber) {
        setHint("Correct!")
    } else if (guessNumber > randomNumber) {
        setHint("Too high!")
    } else {
        setHint("Too Low!")
    }
})

function check() {
    let guessNumber = parseInt(document.getElementsByClassName("input-number")[0].value)
    if (isNaN(guessNumber)) return false
    return true
}

function setHint(text) {
    document.getElementById("hint").innerText = text
}