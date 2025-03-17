// #1
//  let num = Number(prompt("enter number: "));

//  let i = 1;

//  while (i <= num) {
//     if (i % 3 === 0 && i % 5 === 0) {
//          console.log(i);
//      }
//      i++;
//  }



const number = prompt("Enter the number:")
const choice = prompt("Enter the choice:")

for(let i = 0; i < number; i++){
    if(i % 2 === 0 && choice === "even" ){
        console.log(i)
    }else if(i % 2 !== 0 && choice === "odd"){
        console.log(i)
    }else if(i % 3 == 0 && choice === "divisor"){
        console.log(i)
    }
}