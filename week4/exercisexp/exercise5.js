/*
 Exercise 5 : Kg and grams
Instructions

Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

    First, use function declaration and invoke it.
    Then, use function expression and invoke it.
    Write in a one line comment, the difference between function declaration and function expression.
    Finally, use a one line arrow function and invoke it.



*/
function kgToGrams(kg) {
    return kg * 1000;
}
console.log(kgToGrams(5)); // Invokes the function declaration
const kgToGramsExpr = function(kg) {
    return kg * 1000;
}
console.log(kgToGramsExpr(5)); // Invokes the function expression