console.log("Лабораторна робота №2");
console.log("Об’єктно-орієнтоване програмування у JavaScript");

// 1.2.3 Створення об'єкта car1 за допомогою new Object()
let car1 = new Object();

car1.color = "black";
car1.maxSpeed = 220;

car1.driver = new Object();
car1.driver.name = "Dmytryk Vadym";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";

car1.tuning = true;
car1["number of accidents"] = 0;

// 1.2.4 Створення об'єкта car2 за допомогою літерала об'єкта
let car2 = {
    color: "white",
    maxSpeed: 180,
    driver: {
        name: "Dmytryk Vadym",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};

// 1.2.5 Метод drive для car1
car1.drive = function () {
    console.log("I am not driving at night");
};

// 1.2.6 Метод drive для car2
car2.drive = function () {
    console.log("I can drive anytime");
};

console.log("car1:");
console.log(car1);
car1.drive();

console.log("car2:");
console.log(car2);
car2.drive();

// 1.2.7 Конструктор Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    // 1.2.9 Метод trip
    this.trip = function () {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = "Driver " + this.driver.name + " ";

            if (this.driver.nightDriving) {
                message += "drives at night ";
            } else {
                message += "does not drive at night ";
            }

            message += "and has " + this.driver.experience + " years of experience";

            console.log(message);
        }
    };
}

// 1.2.8 Метод AssignDriver через prototype
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// 1.2.10 Створення двох об'єктів Truck
let truck1 = new Truck("red", 5000, 80.5, "Volvo", "FH");
let truck2 = new Truck("blue", 4500, 75.3, "MAN", "TGX");

truck1.AssignDriver("Dmytryk Vadym", true, 5);
truck2.AssignDriver("Dmytryk Vadym", false, 3);

console.log("truck1:");
console.log(truck1);
truck1.trip();

console.log("truck2:");
console.log(truck2);
truck2.trip();
