// code of the square
console.group("Square"); // to group messages in the console

// const sideSquare = 5;
// console.log("The sides of the square measure: " + sideSquare + "cm");

function perimeterSquare(side) {
    return side * 4;
}
// console.log("The perimeter of the square is: " + perimeterSquare + "cm");

function areaSquare(side) {
    return side * side;
}
// console.log("The area of the square is: " + areaSquare + "cm^2");

console.groupEnd();

// code of the triangle
console.group("Triangle");

// const sideTriangle1 = 6;
// const sideTriangle2 = 6;
// const baseTriangle = 4;
// console.log("The sides of the triangle measure: " + sideTriangle1 + "cm, " + sideTriangle2 + "cm, " + baseTriangle + "cm");

// const heightTriangle = 5.5;
// console.log("The height of the triangle is: " + heightTriangle + "cm");

function perimeterTriangle(side1, side2, base){
    return side1 + side2 + base;
}
// console.log("The perimeter of the triangle is: " + perimeterTriangle + "cm");

function areaTriangle(height, base){
    return height * base / 2;
}
// console.log("The area of the triangle is: " + areaTriangle + "cm^2");

console.groupEnd();

// code of the circle
console.group("Triangle");

// radius
// const radiusCircle = 4;
// console.log("The radius of the circle is: " + radiusCircle + "cm");

// diameter
function diameterCircle(radius) {
    return radius * 2;
}

// PI
const PI = Math.PI;
console.log("PI is: " + PI);

// circunference
function perimeterCircle(radius) {
    const diameter = diameterCircle(radius);
    return diameter * PI;
}

// area
function areaCircle(radius) {
    return (radius * radius) * PI;
}

console.groupEnd();


// Here we connect with the HTML
function calculatePerimerterSquare() {
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}
function calculateAreaSquare() {
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area = areaSquare(value);
    alert(area);
}
