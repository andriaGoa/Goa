//პირველ რიგში, უნდა მივუთითოთ HTML ელემენტი, რომელზეც მოვუსმენთ მოვლენას.როდესაც აღნიშნული მოვლენა ხდება, იძახება ფუნქცია, რომელიც შესაბამის ქმედებას ასრულებს.
const button = document.getElementById("myButton");

// EventListener-ის დამატება ღილაკზე დაწკაპების (click) შემთხვევაში
button.addEventListener("click", function() {
    alert("ღილაკი დააჭირეს!");
});