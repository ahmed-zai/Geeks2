import { useEffect, useState } from "react";

function Color() {
  // Part I: State
  const [favoriteColor, setFavoriteColor] = useState("red");

  // Part II: useEffect runs after component renders
  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]); 
  // runs EVERY time favoriteColor changes

  // Function to change the color
  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div className="p-6 border shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-bold">{favoriteColor}</h1>

      <button 
        onClick={changeColor}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Change Color To Blue
      </button>
    </div>
  );
}

export default Color;
