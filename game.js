let min_num = parseInt(JSON.parse(localStorage.getItem("min_num")))
let max_num = parseInt(JSON.parse(localStorage.getItem("max_num")))
let randomNumber = JSON.parse(localStorage.getItem("randomNumber"))
let no_guesses = 0

document.getElementById("possible-number").textContent = `Possible numbers are between ${min_num} to ${max_num}`

document.getElementById("check-btn").addEventListener("click", function () {
    let guessNumber = parseInt(document.getElementsByClassName("input-number")[0].value)
    if (!check()) {
        setHint("Error! please check your input")
    } else if (guessNumber === randomNumber) {
        setHint("Correct!")
        addHistory(guessNumber,"Correct!")
        increseNumberOfGuesses()
        showRestartBtn()
        document.getElementById("check-btn").disabled = true
    } else if (guessNumber > randomNumber) {
        setHint("Too high!")
        addHistory(guessNumber,"Too high!")
        increseNumberOfGuesses()
    } else {
        setHint("Too Low!")
        addHistory(guessNumber,"Too Low!")
        increseNumberOfGuesses()
    }
})

function increseNumberOfGuesses() {
    no_guesses++
    document.getElementById("num-guesses").textContent = no_guesses;
}
function addHistory(number, hint) {
    document.getElementById("history").innerHTML += `
        <p>${number} ${hint}</p>
    `
}
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