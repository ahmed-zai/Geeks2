/*
Exercise 6 : Fortune teller
Instructions

    Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
    The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."



*/
((children, partner, location, job) => {
    const fortune = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.getElementById('fortune').innerText = fortune ;
} ) (3, 'Alice', 'New York', 'Software Engineer'); // Example invocation