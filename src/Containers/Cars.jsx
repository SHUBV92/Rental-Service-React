import React from 'react';
import CarData from '../DataObjects/cars'

const Cars = () => {
    return(
        <div clasName="App">
            <h1>Cars in Branch</h1>
        <div clasName="App">

            {CarData.map(car=>(
                <p>{car.Make}</p>
            ))}
            </div>
        </div>
    )

}
export default Cars;