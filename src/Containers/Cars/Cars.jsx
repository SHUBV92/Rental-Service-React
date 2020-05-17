import React, { useState } from 'react'\
import carData from "../../DataObjects/cars"
 
const Cars = () => { 

    <div>
  {carData.map((car) => {
                <h1>{car.make}</h1>
            })}
    </div>


}

export default Cars; 




