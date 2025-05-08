let word = "hello";
let language;
while (true) {
  language = prompt("enter a language (georgian, english, french)").toLowerCase();
  switch (language) {
    case "georgian":
      console.log("gamarjoba");
      break;
    case "english":
      console.log("hello");
      break;
    case "french":
      console.log("bonjour");
      break;
    default:
      console.log("this language is not available");
      continue;
  }
  break;
}
let hour = parseInt(prompt("enter the hour (0 to 23)"));
if (hour >= 5 && hour < 12) {
  console.log("morning");
} else if (hour >= 12 && hour < 17) {
  console.log("afternoon");
} else if (hour >= 17 && hour < 21) {
  console.log("evening");
} else {
  console.log("night");
}
