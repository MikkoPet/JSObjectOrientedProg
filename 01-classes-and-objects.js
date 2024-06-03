"use strict";

class Car {
    constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    }

    displayCarData() {
        alert(make + " " + model + " " + year + " " + color);
    }
};

let myCar = new Car("Renault", "Clio", "2020", "Red");
myCar.displayCarData;