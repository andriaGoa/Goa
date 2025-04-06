let month = prompt("Enter the name of the month:");
let Season = "";
switch (month) {
    case "December":
    case "January":
    case "February":
        Season = "winter";
        break;
    case "March":
    case "April":
    case "May":
        Season = "spring";
        break;
    case "June":
    case "July":
    case "August":
        Season = "summer";
        break;
    case "September":
    case "October":
    case "November":
        Season = "autumn";
        break;
    default:
        Season = "Invalid month entered";
        break;
}
console.log(Season);