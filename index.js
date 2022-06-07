document.getElementById("play-btn").addEventListener("click", function() {
    setMinMax()
})

function setMinMax() {
    localStorage.setItem("min_num", JSON.stringify(document.getElementById("min_num").value))
    localStorage.setItem("max_num", JSON.stringify(document.getElementById("max_num").value))
}