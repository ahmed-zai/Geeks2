// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// TypeError because you cannot reassign a const variable

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // Alerts: "inside the funcThree function 0"
console.log(funcThree()); // Logs: "inside the funcThree function 0"
funcTwo()
console.log(funcTwo()) ; // Logs: undefined, because funcTwo does not return anything
funcThree() // Alerts: "inside the funcThree function 5"
console.log(funcThree()); // Logs: "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//TypeError when funcTwo() runs because a was declared with const and can't be reassigned.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive() // Alerts: "inside the funcFive function hello"

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//It still works. const just means the value can’t be reassigned, 
// but you can declare a new variable with the same name in a new scope.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); 
}
alert(`outside of the if block ${a}`); 

// #5.1 - run the code in the console
// Alerts: "in the if block 5"
// Alerts: "outside of the if block 2"

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// It will still work the same way. The const variable in the if block
// will shadow the outer variable, and the outer variable will remain unchanged.
