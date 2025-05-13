const numbers = [12, 7, 22, 35, 48, 51, 63, 80, 91, 100];
console.log("Original numbers:", numbers);
const getEvenNumbers = nums => nums.filter(num => num % 2 === 0);
const getOddNumbers = nums => nums.filter(num => num % 2 !== 0);
const evenNumbers = getEvenNumbers(numbers);
const oddNumbers = getOddNumbers(numbers);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

const fullNames = [
  "Giorgi Bibilashvili",
  "Andria Chankvetadze",
  "Dato Gelashvili",
  "Mariam Chkheidze",
  "Luka Tsereteli"
];
const getInitials = names => names.map(fullName => {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName[0]}.${lastName[0]}`;
});
const initialsList = getInitials(fullNames);
console.log("Full Names:", fullNames);
console.log("Initials:", initialsList);

const words = ["apple", "banana", "kiwi", "strawberry"];
const filterLongWords = list => list.filter(word => word.length > 5);
const longwords = filterLongWords(words);
console.log(words);
console.log(longwords);
