import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { availableBuses } from "./Data";
import { findY } from "./Calculations.js";
import Back from "./Back";
import { motion } from 'framer-motion';

const Schedule = ({bus, setTime}) => {
    let i = availableBuses.findIndex(item => item.num === bus);
    const[filter, setFilter] = useState(false);
    const[buses, setBuses] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/buses").then(
        res => res.json()
      ).then(
        data => {
          setBuses(data.buses[i])
        }
      ).catch(
        err => console.log(err)
      )
    }, [])

    const handleClick = (t) => {
        setTime(t)
    }

    const handleToggle = (e) => {
        let filters = document.querySelectorAll('.schedule-filter');
        filters.forEach(filter => filter.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id === "optimal") {
            setFilter(false);
        } else if (e.currentTarget.id === "avoid") {
            setFilter(true);
        };
    }

    return(
        <motion.div className="schedule"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth}}>
            <Back />
            <h1>Bus #{bus} schedule</h1>
            <h3>Reserve one seat from the listed times below</h3>

            <div className="schedule-filters">
                <button id="optimal" className="schedule-filter reserve-button active" onClick={handleToggle}>Optimal times</button>
                <button id="avoid" className="schedule-filter reserve-button" onClick={handleToggle}>Avoid rush hour</button>
            </div>

            { !buses.times && <p>Loading...</p>}

            { !filter && buses.times && buses.times.map(time => (
                <div className="bus-option" key={buses.num+time}>
                    <div className="listed-option">
                        <p>{time}</p>
                        <p className="listed-wait">– in {findY(time)} mins</p>
                    </div>
                    <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
                </div>
            ))}

            { filter && buses.times && buses.times.filter(time => !time.includes("4:") && !time.includes("5:")).map(time => (
                <div className="bus-option" key={buses.num+time+'filtered'}>
                <div className="listed-option">
                    <p>{time}</p>
                    <p className="listed-wait">– in {findY(time)} mins</p>
                </div>
                <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
            </div>
            ))}
        </motion.div>
    )
}

export default Schedule;
