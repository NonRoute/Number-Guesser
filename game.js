let min_num = JSON.parse(localStorage.getItem("min_num"))
let max_num = JSON.parse(localStorage.getItem("max_num"))
let randomNumber = JSON.parse(localStorage.getItem("randomNumber"))

document.getElementById("check-btn").addEventListener("click", function () {
    console.log(min_num, max_num)
    console.log(randomNumber)
})