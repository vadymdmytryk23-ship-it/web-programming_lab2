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


// 1.2.12–1.2.15 Class Square


class Square {

    constructor(a) {

        this.a = a;

    }

    static help() {

        console.log("Square is a quadrilateral with four equal sides and four right angles.");

    }

    length() {

        console.log("Perimeter of square = " + (4 * this.a));

    }

    square() {

        console.log("Area of square = " + (this.a * this.a));

    }

    info() {

        console.log("Square info:");

        console.log("Sides: a = " + this.a + ", b = " + this.a + ", c = " + this.a + ", d = " + this.a);

        console.log("Angles: 90, 90, 90, 90");

        console.log("Perimeter = " + (4 * this.a));

        console.log("Area = " + (this.a * this.a));

    }

}



// 1.2.16–1.2.17 Class Rectangle



class Rectangle extends Square {

    constructor(a, b) {

        super(a);

        this.b = b;

    }

    static help() {

        console.log("Rectangle is a quadrilateral with opposite sides equal and all angles equal to 90 degrees.");

    }

    length() {

        console.log("Perimeter of rectangle = " + (2 * (this.a + this.b)));

    }

    square() {

        console.log("Area of rectangle = " + (this.a * this.b));

    }

    info() {

        console.log("Rectangle info:");

        console.log("Sides: a = " + this.a + ", b = " + this.b + ", c = " + this.a + ", d = " + this.b);

        console.log("Angles: 90, 90, 90, 90");

        console.log("Perimeter = " + (2 * (this.a + this.b)));

        console.log("Area = " + (this.a * this.b));

    }

}



// 1.2.18–1.2.19 Class Rhombus



class Rhombus extends Square {

    constructor(a, alpha, beta) {

        super(a);

        this._alpha = alpha;

        this._beta = beta;

    }

    get alpha() {

        return this._alpha;

    }

    set alpha(value) {

        this._alpha = value;

    }

    get beta() {

        return this._beta;

    }

    set beta(value) {

        this._beta = value;

    }

    static help() {

        console.log("Rhombus is a quadrilateral with four equal sides. Opposite angles are equal.");

    }

    length() {

        console.log("Perimeter of rhombus = " + (4 * this.a));

    }

    square() {

        let area = this.a * this.a * Math.sin(this.beta * Math.PI / 180);

        console.log("Area of rhombus = " + area);

    }

    info() {

        let area = this.a * this.a * Math.sin(this.beta * Math.PI / 180);

        console.log("Rhombus info:");

        console.log("Sides: a = " + this.a + ", b = " + this.a + ", c = " + this.a + ", d = " + this.a);

        console.log("Angles: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);

        console.log("Perimeter = " + (4 * this.a));

        console.log("Area = " + area);

    }

}



// 1.2.20–1.2.21 Class Parallelogram



class Parallelogram extends Rectangle {

    constructor(a, b, alpha, beta) {

        super(a, b);

        this.alpha = alpha;

        this.beta = beta;

    }

    static help() {

        console.log("Parallelogram is a quadrilateral with opposite sides parallel and equal.");

    }

    length() {

        console.log("Perimeter of parallelogram = " + (2 * (this.a + this.b)));

    }

    square() {

        let area = this.a * this.b * Math.sin(this.beta * Math.PI / 180);

        console.log("Area of parallelogram = " + area);

    }

    info() {

        let area = this.a * this.b * Math.sin(this.beta * Math.PI / 180);

        console.log("Parallelogram info:");

        console.log("Sides: a = " + this.a + ", b = " + this.b + ", c = " + this.a + ", d = " + this.b);

        console.log("Angles: " + this.alpha + ", " + this.beta + ", " + this.alpha + ", " + this.beta);

        console.log("Perimeter = " + (2 * (this.a + this.b)));

        console.log("Area = " + area);

    }

}



// 1.2.23 Виклик static help()



console.log("Static help methods:");

Square.help();

Rectangle.help();

Rhombus.help();

Parallelogram.help();



// 1.2.24 Створення об'єктів і виклик info()


let square1 = new Square(5);

let rectangle1 = new Rectangle(6, 4);

let rhombus1 = new Rhombus(7, 120, 60);

let parallelogram1 = new Parallelogram(8, 5, 120, 60);

console.log("Objects info:");

square1.info();

rectangle1.info();

rhombus1.info();

parallelogram1.info();



// 1.2.25–1.2.26 Triangular



function Triangular({ a = 3, b = 4, c = 5 } = {}) {

    return {

        a: a,

        b: b,

        c: c

    };

}

let triangle1 = Triangular();

let triangle2 = Triangular({ a: 6, b: 8, c: 10 });

let triangle3 = Triangular({ a: 5, b: 5, c: 7 });

console.log("Triangular objects:");

console.log(triangle1);

console.log(triangle2);

console.log(triangle3);



// 1.2.27–1.2.28 PiMultiplier



function PiMultiplier(number) {

    return function () {

        return Math.PI * number;

    };

}

let multiplyPiBy2 = PiMultiplier(2);

let multiplyPiByTwoThirds = PiMultiplier(2 / 3);

let dividePiBy2 = PiMultiplier(1 / 2);

console.log("PiMultiplier results:");

console.log("PI * 2 = " + multiplyPiBy2());

console.log("PI * 2/3 = " + multiplyPiByTwoThirds());

console.log("PI / 2 = " + dividePiBy2());

// ===============================

// 1.2.29–1.2.31 Painter

// ===============================

function Painter(color) {

    return function (object) {

        if (object.type) {

            console.log(color + " " + object.type);

        } else {

            console.log("No 'type' property occurred!");

        }

    };

}

let PaintBlue = Painter("blue");

let PaintRed = Painter("red");

let PaintYellow = Painter("yellow");

let object1 = {

    maxSpeed: 280,

    type: "Sportcar",

    color: "magenta"

};

let object2 = {

    type: "Truck",

    avgSpeed: 90,

    "load capacity": 2400

};

let object3 = {

    maxSpeed: 180,

    color: "purple",

    isCar: true

};

console.log("Painter results:");

console.log("Object 1:");

PaintBlue(object1);

PaintRed(object1);

PaintYellow(object1);

console.log("Object 2:");

PaintBlue(object2);

PaintRed(object2);

PaintYellow(object2);

console.log("Object 3:");

PaintBlue(object3);

PaintRed(object3);

PaintYellow(object3);
