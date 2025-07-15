/* 
🌟 Exercise 1 : Location
Instructions

    Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


*/
// the output will be:
// I am john Doe from VanCouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// explanation: The code use destructutiring to extract values from the person object.
