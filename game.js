let min_num = parseInt(JSON.parse(localStorage.getItem("min_num")))
let max_num = parseInt(JSON.parse(localStorage.getItem("max_num")))
let randomNumber = JSON.parse(localStorage.getItem("randomNumber"))

document.getElementById("possible-number").textContent = `Possible numbers are between ${min_num} to ${max_num}`

document.getElementById("check-btn").addEventListener("click", function () {
    let guessNumber = parseInt(document.getElementsByClassName("input-number")[0].value)
    if (!check()) {
        setHint("Error! please check your input")
    } else if (guessNumber === randomNumber) {
        setHint("Correct!")
        showRestartBtn()
    } else if (guessNumber > randomNumber) {
        setHint("Too high!")
        hideRestartBtn()
    } else {
        setHint("Too Low!")
        hideRestartBtn()
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

function showRestartBtn() {
    document.getElementById("restart").innerHTML = `
        <button type="button" id="restart-btn">Restart!</button>
    `
    document.getElementById("restart-btn").addEventListener("click", function() {
        window.location.href = "index.html"
    })
}

function hideRestartBtn() {
    document.getElementById("restart").innerHTML = ""
}