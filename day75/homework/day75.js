const car = {
    company: "Toyota",
    model: "Corolla",
    mileage: 50000,
    year: 2018,
    condition: "good",
    checkCondition: function(condition) {
        if (condition === "good" || condition === "bad") {
            console.log("Car is in", company.condition, "condition");
        }
}
}

car.color = "Red";
car.price = 20000;
delete car.mileage;
car.checkCondition(car.condition);
console.log(car);




const user = {
    name: "joe doe",
    age: 18,
    email: "joe.@com",
    city: "tokyo",
    hobbies: ["reading", "traveling", "programming"],
    isActive: true
    }
    console.log("User Details:");
    for (let key in user) {
        console.log(key);
    }




    const student = {
        fullname: "Giorgi Khmaladze",
        scores: [10, 9, 5, 10, 8],
        averageScore() {
            let sum = 0;
            for (let i of this.scores) {
                sum += i;
            }
            return sum / this.scores.length;
        },
        checkStudent() {
            if (this.averageScore() > 6) { 
                return "You are good";
            } else {
                return "You need improvement";
            }
        }
    };