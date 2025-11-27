import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/color";

import Car from "./components/Car";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
    <div className="p-4">
      <Car carInfo={carinfo} />
    </div>
      <div className="p-4">
      <Events />
    </div>
    <div className="p-4">
      <Phone />
    </div>
      <div className="p-4">
      <Color />
    </div>
    </>
  );
}

export default App;



