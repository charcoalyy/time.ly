import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { motion } from 'framer-motion';

const Selection = ({start, setStart, destination, setDestination, date, setDate}) => {

    const navigate = useNavigate();

    const[error, setError] = useState(null);

    const handleSelection = (e) => {
        if (!start || !destination || !date) {
            setError("Please fill in all three fields.")
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
            <div id="hi">Welcome</div>
            <div className="selection">
                <h1>Plan a trip</h1>
                <select className="start-picking selection-item" onChange={(e) => setStart(e.target.value)} required>
                    <option value="" id="default-start" selected disabled hidden>From</option>
                    <option value="Waterloo">Waterloo</option>
                </select>
                <select className="destination-picking selection-item" onChange={(e) => setDestination(e.target.value)} required>
                    <option value="" id="default-destination" selected disabled hidden>To</option>
                    <option value="Toronto">Toronto</option>
                    <option value="McMaster">McMaster</option>
                    <option value="McGill">McGill</option>
                </select>
                <form autocomplete="off">
                <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText={'Date'} className="selection-item" wrapperClassName="date-picker" id="date-picker" required/>
                </form>
                <button type="submit" className="action-button" onClick={handleSelection}>Find bus route</button>

                {error && <div className="error">{error}</div>}
            </div>
        </motion.div>
    )
}

export default Selection;