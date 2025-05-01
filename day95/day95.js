const names = ["andria", "giorgi", "tamari", "dato"];
const newnames = names.filter(element => element[0] === element[0].toUpperCase());
console.log(newnames);

const numbers = [12, -5, 0, -32, 45, -1, 8, -17, 23, -9];
const low = numbers.filter(num => num < 0);
const high = low.map(num => num * -1);
console.log(high);