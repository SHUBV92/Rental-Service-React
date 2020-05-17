import React from "react"
import {Link} from "react-router-dom"
import Form from './Form/Form'

const Booking = () => {
    return(
        <div>
            <h1>Booking</h1>
            <input 
            type="date"
            placeholder="date"
            />
            <Form />
        </div>
    )
}

export default Booking; 