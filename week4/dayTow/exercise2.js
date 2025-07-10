/*
Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

    Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
    Hint : Use the array methods taught in class and ternary operator.



*/
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors.forEach((color, index) => {
    const position = index +1 ;
    const suffix = (position <= 3) ? ordinal[position] : ordinal[0];
    console.log(`${position}${suffix} choice is ${color}.`);
});