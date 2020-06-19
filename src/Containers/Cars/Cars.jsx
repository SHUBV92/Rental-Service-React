import React, { useState } from "react";
import carData from "../../DataObjects/cars";

const Cars = () => {

    const [Rental, setRental] = useState([]);

    const [Return, setReturn] = useState([]);


  return (
    <div>
      <h1>Returned Cars</h1>
      <p>Rental: {Rental} </p>
      <p>Returns: {Return} </p>

      {carData.map(car => (
        <div>
          <h1>{car.make}</h1>
         
          <button
            onClick={() => 
                setRental([Rental].concat(car.make))}
          >
            Rental
          </button>
           <button
            onClick={() =>
              setReturn([Return].concat(car.make))
            }
          >
            Return
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cars;
