{/*
   
Exercise 3 : HTML Tags in React
Instructions

PART I:

    In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags.
        create a <h1> tag and set its color to red, and the background color to lightblue.
        create a paragraph, a link, a form, an image and a list.

    Import Exercise component to the App.js file and display it.

    Expected Output:(without the grey border)



PART II:

    Add the below object to the component Exercise. Use this object to style the <h1>.

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};


PART III:

    Create a new css file named Exercise.css and import it in your Exercise component.
    Add the following CSS properties to the CSS file, and apply them to the paragraph tag:

.para {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
 
    */}
import React, { Component } from 'react';


class Exercise3 extends Component {
    render() {
       
         
         
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
return <>
    {/*  this part1 */}
    <div className=" place-content-center  hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 h-100 place-items-center justify-center  ">
       <h1 style={style_header}>this is a header</h1>
       <p className="...">this is paragraph</p>
       <a href="#" className="underline underline-red-400 underline-w-10">this the link </a>
       <form>
         <label>this the form input </label>
         <input
              placeholder="input"
              className="border p-2 rounded"
            />
       </form>
    </div>

</>

    }

}
export default Exercise3;