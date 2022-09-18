import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { motion } from 'framer-motion';

const Selection = ({start, setStart, destination, setDestination, date, setDate, arrival, setArrival}) => {

    const navigate = useNavigate();
    const[error, setError] = useState(null);

    // const sendArrival = async () => {
    //     const data = arrival
    //     const result = await fetch('http://localhost:5000/buses', { // uhhh not sure if this the right one
    //         method:'POST',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     }) 
    //     const jsonResult = await result.json();
    //     console.log('data sent')
    //     console.log(jsonResult)
    // }

    const handleSelection = (e) => {
        if (!start || !destination || !date || !arrival) {
            setError("Please fill in all four fields.")
        } else {
            navigate("/available")
            // sendArrival()
        }
    }

    return(
        <motion.div className="content-container"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth}}
        >
            <div id="hi">time.ly</div>
            <div className="selection">
                <h1>Plan a trip</h1>
                <select className="start-picking selection-item" onChange={(e) => setStart(e.target.value)} required>
                    <option value="" id="default-start" className="default" selected disabled hidden>From</option>
                    <option value="Waterloo">Waterloo</option>
                </select>

                <select className="destination-picking selection-item" onChange={(e) => setDestination(e.target.value)} required>
                    <option value="" id="default-destination" className="default" selected disabled hidden>To</option>
                    <option value="Toronto">Toronto</option>
                    <option value="McMaster">McMaster</option>
                    <option value="McGill">McGill</option>
                </select>

                <form autoComplete="off" action="http://localhost:5000/process" method="post" onSubmit={(e) => e.preventDefault()}>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText={'Date'} className="selection-item" id="date-picker"/>

                    <select name="selected-arrival" className="time-picking selection-item" onChange={(e) => setArrival(e.target.value)} required>
                        <option value="" id="default-arrival" className="default" selected disabled hidden>Desired arrival time</option>
                        {/* <option value="5">5:00AM</option>
                        <option value="5.5">5:30AM</option>
                        <option value="6">6:00AM</option>
                        <option value="6.5">6:30AM</option>
                        <option value="7">7:00AM</option>
                        <option value="7.5">7:30AM</option>
                        <option value="8">8:00AM</option>
                        <option value="8.5">8:30AM</option>
                        <option value="9">9:00AM</option>
                        <option value="9.5">9:30AM</option>
                        <option value="10">10:00AM</option>
                        <option value="10.5">10:30AM</option>
                        <option value="11">11:00AM</option>
                        <option value="11.5">11:30AM</option> */}
                        <option value="12">12:00PM</option>
                        <option value="12.5">12:30PM</option>
                        <option value="1">1:00PM</option>
                        <option value="1.5">1:30PM</option>
                        <option value="2">2:00PM</option>
                        <option value="2.5">2:30PM</option>
                        <option value="3">3:00PM</option>
                        <option value="3.5">3:30PM</option>
                        <option value="4">4:00PM</option>
                        <option value="4.5">4:30PM</option>
                        <option value="5">5:00PM</option>
                        <option value="5.5">5:30PM</option>
                        <option value="6">6:00PM</option>
                        <option value="6.5">6:30PM</option>
                        <option value="7">7:00PM</option>
                        <option value="7.5">7:30PM</option>
                        <option value="8">8:00PM</option>
                        <option value="8.5">8:30PM</option>
                        <option value="9">9:00PM</option>
                        <option value="9.5">9:30PM</option>
                        <option value="10">10:00PM</option>
                        <option value="10.5">10:30PM</option>
                        <option value="11">11:00PM</option>
                        <option value="11.5">11:30PM</option>
                    </select>

                    <button name="submit" type="submit" className="action-button" onClick={handleSelection}>Find bus route</button>

                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </motion.div>
    )
}

export default Selection;