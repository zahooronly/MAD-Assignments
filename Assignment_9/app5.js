"use strict";
/* 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.*/
class Cylinder {
    radius;
    height;
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    volume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}
let cylinder = new Cylinder(2, 3);
console.log(`Volume of Cylinder: ${cylinder.volume().toFixed(4)}`);
