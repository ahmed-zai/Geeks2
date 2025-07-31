const compareToTen = require('./exercise1');
const desplaySuccess = require('./exercise2');
const { resolvePromise, rejectPromise } = require('./exercise3');



describe("compareToTen function", () => {
    console.log("exercise 1: testing compareToTen function");

    test("resolves when number is less than 10", () => {
        return expect(compareToTen(8)).resolves.toBe("8number is less than or equal to 10");
    });
    test("rejects when number is greater than 10", () => {
        return expect(compareToTen(15)).rejects.toBe("15 is greater than 10");
    });
    test("resolves when number is equal to 10", () => {
        return expect(compareToTen(10)).resolves.toBe("10number is less than or equal to 10");
    });
});


test("desplaySuccess resolves after 4 seconds", () => {
    console.log("exercise 2: testing desplaySuccess function");

    jest.useFakeTimers();
    const promise = desplaySuccess;
    jest.advanceTimersByTime(4000);
    return expect(promise).resolves.toBe("success");
}); 


describe("resolvePromise and rejectPromise", () => {
    console.log("exercise 3:");

    test("resolvePromise resolves with value 3", () => {
        return expect(resolvePromise).resolves.toBe(3);
    });
    test("rejectPromise rejects with error 'Boo!'", () => {
        return expect(rejectPromise).rejects.toBe("Boo!");
    });
});