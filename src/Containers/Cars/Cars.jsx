import React, { useState } from "react";
import carData from "../../DataObjects/cars";

const Cars = () => {
  const [Return, setReturn] = useState([]);

  return (
    <div>
      {carData.map(car => (
        <div>
          <h1>Returned Cars</h1>
          <h1>{car.make}</h1>
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
      ))}
    < /div>
  );
};

export default Cars;
