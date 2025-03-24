const myInfo = {
    name: "andria",
    surname: "chankvetadze",
    age: 13,
    hobby: "reading and programming"
};

console.log(myInfo);


console.log("Name:", myInfo.name);
console.log("Surname:", myInfo.surname);
console.log("Age:", myInfo.age);
console.log("Hobby:", myInfo.hobby);


function createUser() {
    let name = prompt("Enter your first name:");
    let surname = prompt("Enter your last name:");
    let age = prompt("Enter your age:");
    let hobby = prompt("Enter your hobby:");

}


console.log("welcome", createUser.name)



for(let i of Object.keys(myInfo)){
    console.log(i)
}




for(let i of Object.values(myInfo)){
    console.log(i)
}