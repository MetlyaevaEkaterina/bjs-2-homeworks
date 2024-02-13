﻿function parseCount(number) {
    let parcedNumber = Number.parseFloat(number); 
    if (Number.isNaN(parcedNumber)) {
        throw new Error("Невалидное значение");
    }
    return parcedNumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b != this.c) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
    }

    get perimeter() {
        return this._a + this._b + this._c;
    }

    get area() {
        let p = this.perimeter() / 2;
        let S = Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {return "Ошибка! Треугольник не существует"},
            get area() {return "Ошибка! Треугольник не существует"}
    }

}