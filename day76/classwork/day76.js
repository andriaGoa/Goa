function changeColor(){
    document.getElementById("a").style.color = "red"
}
const p = document.getElementById("a")
p.addEventListener("click", changeColor)

function changeText(){
    p.textContent = "save the nature"
}
p.addEventListener("click", changeText)