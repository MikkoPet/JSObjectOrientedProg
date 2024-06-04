"use strict";

class Vehicle {
    _make;
    _model;
    _year;    

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
    _color;

    getColor() {
        return this._color;
    }

    setColor(color) {
        this._color = color;
    }
};