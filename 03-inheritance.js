"use strict";

class Vehicle {
    _make = "Renault";
    _model = "Clio";
    _year = "2020";    

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

};

class Car extends Vehicle {
    _color = "Red"

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }
};