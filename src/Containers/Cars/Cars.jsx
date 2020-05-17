import React, { useState } from "react";
import carData from "../../DataObjects/cars";

const Cars = () => {
  const [Return, setReturn] = useState([]);

  return (
    <div>
      <h1>Returned Cars</h1>

      {carData.map(car => {
        return <h1>{car.make}</h1>
      })}

      <p>You choose {Return} Mercedes</p>
      <button
        onClick={() => setReturn(Return + 1)}
      >
        Add
      </button>

      <button
        onClick={() => setReturn(Return - 1)}
      >
        Remove
      </button>
    </div>
  );
};

export default Cars;
