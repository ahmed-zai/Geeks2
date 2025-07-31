/*
🌟 Exercise 2 : Promises
Instructions

    Create a promise that resolves itself in 4 seconds and returns a “success” string.

*/
const desplaySuccess = new Promise((resolve) => {
    setTimeout(() => {
        resolve("success")
    }, 4000);
})


module.exports = desplaySuccess;