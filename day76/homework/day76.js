let p = document.querySelector("p")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
let count = 0




function add() {
    count++
    console.log(count)
    p.textContent = count
}


function minus() {

    if (count > 0) {
        count--
        p.textContent = count
    }else{
        return
    }
}


increase.addEventListener("click", add)

decrease.addEventListener("click", minus)