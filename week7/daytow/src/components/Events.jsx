import { useState } from "react";

function Events() {

  // ------------------ Part I ------------------
  const clickMe = () => {
    alert("I was clicked");
  };

  // ------------------ Part II ------------------
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`You pressed Enter! Input value: ${e.target.value}`);
    }
  };

  // ------------------ Part III ------------------
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div className="p-4 border shadow-xl rounded-lg space-y-4">

      {/* -------- Part I -------- */}
      <button 
        onClick={clickMe}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Click Me
      </button>

      {/* -------- Part II -------- */}
      <input
        type="text"
        placeholder="Type and press Enter"
        onKeyDown={handleKeyDown}
        className="border p-2 rounded w-full"
      />

      {/* -------- Part III -------- */}
      <button 
        onClick={toggleButton}
        className="p-2 bg-green-500 text-white rounded"
      >
        {isToggleOn ? "ON" : "OFF"}
      </button>

    </div>
  );
}

export default Events;
