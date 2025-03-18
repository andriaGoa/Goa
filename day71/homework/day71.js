let list = [1, 2, 3, 4, 5];
console.log(list.length);

for (let i = 1; i < list.length; i++) {
    if (list[i] > max) max = list[i];
    if (list[i] < min) min = list[i];
}
console.log(max);
console.log(min);

let oldList = ["apple", "bannana", "pair"];
let newList = [];
for (let i = 0; i < oldList.length; i++) {
    let firstLetter = oldList[i][0];
  newList.push(firstLetter);
}
console.log(newList)

let users = ["ანდრია ჭანკვეტაძე", "გიორგი მიქაძე", "ვახტანგ ჭუმბურიძე"];
let initials = [];
for (let user of users) {
    let parts = user.split(" ");
    initials.push(parts[0] + "." + parts[1]);
}
console.log(initials);

let numbers = [3, -1, 7, -5, 8, -2];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 0);
    }
}
console.log(numbers);

let users1 = [
    {name:"Giorgi", lastName: "khmaladze"},
    {name:"Andria", lastName:"Chankvetadze"},
    {name:"Giorgi",lastName:"Narindoshvili"}
]




function isLower(st){
    return st.toLowerCase() === st
}


for(let i = 0; i < users1.length; i++){
    if(isLower(users1[i].name[0]) || isLower(users1[i].lastName)){
        users1.splice(i,1)
    }

}
console.log(users1)