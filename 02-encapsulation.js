"use strict";

class Car {
    constructor() {
    this._make = "Renault";
    this._model = "Clio";
    this._year = "2020";
    this._color = "Red";
    }

    setMake(make) {
        this._make = make;
    }

    getMake() {
        return this._make;
    }

    setModel(model) {
        this._model= model;
    }

    getModel() {
        return this._make;
    }

    setYear(year) {
        this._year = year;
    }

    getYear() {
        return this._year;
    }

    setColor(color) {
        this._color = color;
    }

    getColor() {
        return this._color;
    }

    displayCarData() {
        alert(_make + " " + _model + " " + _year + " " + _color);
    }
}

let myCar = new Car();
myCar.setColor("Black");