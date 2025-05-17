let images = ["image1.png", "image2.png", "image3.png"];
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const img = document.querySelector("#carousel");
function show(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    img.src = images[index];
    return index;
}
let index = 0;
previous.addEventListener("click", function () {
    index--;
    index = show(index);
});
next.addEventListener("click", function () {
    index++;
    index = show(index);
});
show(index);