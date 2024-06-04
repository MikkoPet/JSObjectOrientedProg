"use strict";

class Animal {
    makeSomeNoise() {
        return;
    };
}

class Dog extends Animal {
    makeSomeNoise() {
        return "The Dog Barks";
    }
}

class Cat extends Animal {
    makeSomeNoise() {
        return "The Cat Meows";
    }
}