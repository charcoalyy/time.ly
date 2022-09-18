import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { motion } from 'framer-motion';

const Selection = ({start, setStart, destination, setDestination, date, setDate, arrival, setArrival}) => {

    const navigate = useNavigate();
    const[error, setError] = useState(null);

    const handleSelection = (e) => {
        if (!start || !destination || !date || !arrival) {
            setError("Please fill in all four fields.")
        } else {
            navigate("/available")
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

                <form autoComplete="off">
                    <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText={'Date'} className="selection-item" id="date-picker" required/>
                </form>

                <select className="time-picking selection-item" onChange={(e) => setArrival(e.target.value)} required>
                    <option value="" id="default-arrival" className="default" selected disabled hidden>Desired arrival time</option>
                    <option value="5:00AM">5:00AM</option>
                    <option value="5:30AM">5:30AM</option>
                    <option value="6:00AM">6:00AM</option>
                    <option value="6:30AM">6:30AM</option>
                    <option value="7:00AM">7:00AM</option>
                    <option value="7:30AM">7:30AM</option>
                    <option value="8:00AM">8:00AM</option>
                    <option value="8:30AM">8:30AM</option>
                    <option value="9:00AM">9:00AM</option>
                    <option value="9:30AM">9:30AM</option>
                    <option value="10:00AM">10:00AM</option>
                    <option value="10:30AM">10:30AM</option>
                    <option value="11:00AM">11:00AM</option>
                    <option value="11:30AM">11:30AM</option>
                    <option value="12:00AM">12:00PM</option>
                    <option value="12:30PM">12:30PM</option>
                    <option value="1:00PM">1:00PM</option>
                    <option value="1:30PM">1:30PM</option>
                    <option value="2:00PM">2:00PM</option>
                    <option value="2:30PM">2:30PM</option>
                    <option value="3:00PM">3:00PM</option>
                    <option value="3:30PM">3:30PM</option>
                    <option value="4:00PM">4:00PM</option>
                    <option value="4:30PM">4:30PM</option>
                    <option value="5:00PM">5:00PM</option>
                    <option value="5:30PM">5:30PM</option>
                    <option value="6:00PM">6:00PM</option>
                    <option value="6:30PM">6:30PM</option>
                    <option value="7:00PM">7:00PM</option>
                    <option value="7:30PM">7:30PM</option>
                    <option value="8:00PM">8:00PM</option>
                    <option value="8:30PM">8:30PM</option>
                    <option value="9:00PM">9:00PM</option>
                    <option value="9:30PM">9:30PM</option>
                    <option value="10:00PM">10:00PM</option>
                    <option value="10:30PM">10:30PM</option>
                    <option value="11:00PM">11:00PM</option>
                    <option value="11:30PM">11:30PM</option>
                </select>

                <button type="submit" className="action-button" onClick={handleSelection}>Find bus route</button>

                {error && <div className="error">{error}</div>}
            </div>
        </motion.div>
    )
}

export default Selection;