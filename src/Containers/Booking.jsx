import React, {Component, useState } from "react"
import {Link} from "react-router-dom"
import Form from './Form/Form'

class Booking extends Component {
    constructor(){
        super()
this.state = {
    name: null

}    
const handleBooking = this.handleBooking.bind(this)
}    

// const [Booking, setBooking] = useState({})

handleChange(event) {
    this.setState({name: event.target.value})
}

handleBooking = (event) => {

    console.log("Event", event.target.value)
    // setBooking(Booking:)

}

render(){
    return( 
        <div>
            <h1>Bookings</h1>
            <form>
            <input 
            type="date"
            placeholder="date"
            />
            <input type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}/>
            <button onClick={this.handleBooking}>Submit</button>
            </form>
            <Form />

            Bookings
            <hr />
            Name:{this.state.name}
            <br /> 
            Dates: {this.state.dates}
            <br />
            Car: {this.state.car}
        </div>
    )
}
}

export default Booking; 