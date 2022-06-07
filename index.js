const min_numEl = document.getElementById("min_num")
const max_numEl = document.getElementById("max_num")

document.getElementById("play-btn").addEventListener("click", function () {
    if (!check()) {
        document.getElementById("error").textContent = "Error! please check your input"
    } else {
        setMinMax()
        generateNumber()
        window.location.href = "game.html"
    }
})

function check() {
    let min = parseInt(min_numEl.value)
    let max = parseInt(max_numEl.value)
    if (min > max || isNaN(min) || isNaN(max)) return false
    return true
}
function setMinMax() {
    localStorage.setItem("min_num", JSON.stringify(min_numEl.value))
    localStorage.setItem("max_num", JSON.stringify(max_numEl.value))
}

function generateNumber() {
    let max = parseInt(max_numEl.value)
    let min = parseInt(min_numEl.value)
    console.log(min, max)
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randomNumber)
    localStorage.setItem("randomNumber", JSON.stringify(randomNumber))
}