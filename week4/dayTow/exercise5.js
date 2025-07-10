/*
🌟 Exercise 5 : Star Wars
Instructions

Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

    Use the reduce() method to combine all of these into a single string.


*/
 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
 const epicString = epic.reduce((acc, word) => acc + " " + word, '');
 console.log(epicString);