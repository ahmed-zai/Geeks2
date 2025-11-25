/* 
Exercise 1: with JSX
Instructions

    In the App.js file, display a “Hello World!” message in a paragraph.
    Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
    Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"




*/

const Exercise1 = ({ispress}) => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;

    return(
        <div>
            <p className="shadow-2xl border text-green-400"> Hello world </p>
            {myelement}
            <p>  "React is {sum} times better with JSX" </p>

        </div>
    )
}
export default Exercise1;