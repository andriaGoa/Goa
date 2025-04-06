let images = ["download.jfif","download(1).jfif","download(2).jfif"]
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.querySelector("img")


function show(index){
    if(index < 0){
        currIndex = images.length -1
    }else if (index >=  images.length){
        currIndex = 0
    }else{
        currIndex =  index
    }
    img.src = images[currIndex]
}


let index = 0

previous.addEventListener("click",function(){
    index --
    show(index)
})

next.addEventListener("click",function(){
    index ++
    show(index)
})