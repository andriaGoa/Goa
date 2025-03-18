let n = parseInt(prompt("enter a number:"));
let sumeven = 0;
for (let i = 2; i <= n; i += 2) {
    sumeven += i;
}
console.log(sumeven);



let numbers = [3, 10, 7, 4, 12, 5, 8, 15, 20, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

function sumOfEvenNumbers(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 === 0) {
            sum += arr1[i];
        }
    }
    return sum;
}
let list1 = [1, 2, 3,5,7, 29, 54, 3,2, 4, 56, 2, 34]
console.log(sumOfEvenNumbers(list1) ** 2)