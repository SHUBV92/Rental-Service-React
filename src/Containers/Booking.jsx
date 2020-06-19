import React, { useState } from "react"
import {Link} from "react-router-dom"
import Form from './Form/Form'

const Booking = () => {
    
const [Booking, setBooking] = useState({})

const handleBooking = (event) => {

    console.log("Event", event.target.value)
    // setBooking(Booking:)

}

    return( 
        <div>
            <h1>Booking</h1>
            <form>
            <input 
            type="date"
            placeholder="date"
            />
            <button onClick={handleBooking}>Submit</button>
            </form>


            <Form />
        </div>
    )
}

export default Booking; 