import { useState } from "react";
import Garage from "./Garage";

const Car = ({ carInfo }) => {
  // Part II: useState hook
  const [color] = useState("red");

  return (
    <div className="p-4 border shadow-lg rounded-md">
      <h2 className="text-xl font-bold">
        This car is a {color} {carInfo.model}
      </h2>

      {/* Part III: Include Garage */}
      <Garage size="small" />
    </div>
  );
}

export default Car;
