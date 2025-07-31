/*
🌟 Exercise 3 : Resolve & Reject
Instructions

    Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
    Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”



*/
const resolvePromise = Promise.resolve(3);
const rejectPromise = Promise.reject("Boo!");

module.exports = { resolvePromise, rejectPromise };