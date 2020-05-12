import React from "react";
import carData from "../DataObjects/cars";

const Cars = () => {
  return (
    <div clasName="App">
      <h1>Cars in Branch</h1>
      {carData.map(car => (
        <div>
          <div clasName="Name">
          <p><h3>Make: {car.make}</h3></p>
          </div>
          <div className="Des"></div>
          <p>Model: {car.model}</p>
        </div>
      ))}
    </div>
  );
};
export default Cars;
