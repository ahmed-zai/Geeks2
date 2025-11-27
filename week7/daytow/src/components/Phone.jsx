import { useState } from "react";

function Phone() {
  // ---------- Part I: Phone state ----------
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // ---------- Part II: changeColor function ----------
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div className="p-4 border shadow-lg rounded-lg space-y-2">
      <h2 className="text-xl font-bold">My Phone</h2>

      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>

      <button 
        onClick={changeColor}
        className="mt-3 px-4 py-2 rounded bg-blue-600 text-white"
      >
        Change color to blue
      </button>
    </div>
  );
}

export default Phone;
