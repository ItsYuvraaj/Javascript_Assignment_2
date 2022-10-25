//Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene.
//A triangle is Equilateral if all the sides are equal.
//A triangle is Isosceles if any of its two sides are equal.
//A traingle is Scalene if none of its sides are equal.

function checkTriangle(a, b, c) {
    
    //Condition to check for Equilateral Triangle.
    if (a == b && b == c) {
        console.log("It's an Equilateral Triangle.");

    //Condition to check for Isosceles Triangle.
    } else if (a == b || b == c || c == a){
        console.log("It's an Isosceles Triangle.");
    
    //Otherwise it's a Scalene Triangle.
    } else {
        console.log("It's a Scalene Triangle.");
    }
}

//Initializing or giving values of sides of a triangle.
let a = 10;
let b = 20;
let c = 10;

//Calling the Function.
checkTriangle(a, b, c);