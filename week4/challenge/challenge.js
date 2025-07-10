/*

Instructions

Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

    Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

    Create another arrow function named cloneGroceries.
        In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
            Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
        In the function, create a variable named shopping that is equal to the groceries variable.
            Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
            Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

    Invoke the cloneGroceries function.


*/
let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// 1. Arrow function to display fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// 2. Arrow function to clone groceries
const cloneGroceries = () => {
    // Pass by value
    let user = client; // user gets a copy of the value "John"
    client = "Betty"; // changes client, but not user

    console.log("user:", user); // Output: John (because strings are primitive and passed by value)

    // Pass by reference
    let shopping = groceries; // shopping is a reference to groceries
    shopping.totalPrice = "35$"; // modifies groceries too
    shopping.other.paid = false; // also modifies groceries.other.paid

    console.log("groceries.totalPrice:", groceries.totalPrice); // Output: 35$
    console.log("groceries.other.paid:", groceries.other.paid); // Output: false
};

// Invoke the functions
displayGroceries();
cloneGroceries();

