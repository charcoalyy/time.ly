import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { availableBuses } from "./Data";
import { findY } from "./Calculations.js";
import Back from "./Back";
import { motion } from 'framer-motion';

let availBus = [];

const Schedule = ({bus, setTime}) => {
    const[filter, setFilter] = useState(false);
    let i = availableBuses.findIndex(item => item.num === bus);
    const[data, setData] = useState([]);

    useEffect(() => {
      fetch("/buses").then(
        res => res.json()
      ).then(
        data => {
          availBus = data.buses[1];
          setData(data.buses)
          console.log(availBus.times);
        }
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
        exit={{x: window.innerWidth}}
        >
            <Back />
            <h1>Bus #{bus} schedule</h1>
            <h3>Reserve one seat from the listed times below</h3>

            <div className="schedule-filters">
                <button id="optimal" className="schedule-filter reserve-button active" onClick={handleToggle}>Optimal times</button>
                <button id="avoid" className="schedule-filter reserve-button" onClick={handleToggle}>Avoid rush hour</button>
            </div>

            {/* {(typeof data.buses === 'undefined') ? (
                <p>Loading times...</p>
            ) : (
                data.buses.map((bus, i) => (
                  <div key={i}>
                    <p>{bus.times}</p>
                  </div>
                ))
            )} */}

            {/* {(typeof data.buses === 'undefined') ? (<p>Loading...</p>) : (
                data.buses.filter(item => item.num === bus).map(filteredItem => (
                    <div>{filteredItem.times.map(time => (
                        <div className="bus-option">
                            <div className="listed-option">
                                <p>{time}</p>
                                <p className="listed-wait">– in {findY(time)} mins</p>
                            </div>
                            <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
                        </div>
                    ))}
                    </div>
                ))
            )} */}

            {/* { !filter && (data.buses[i]).filter(item => item.num === bus).map(filteredItem => (
                <div>{filteredItem.times.map(time => (
                    <div className="bus-option">
                        <div className="listed-option">
                            <p>{time}</p>
                            <p className="listed-wait">– in {findY(time)} mins</p>
                        </div>
                        <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
                    </div>
                ))}</div>
            ))} */}



            {/* { availBus.times.filter(time => <div>{time}</div>)} */}





            {/* { !filter && availableBuses.filter(item => item.num === bus).map(filteredItem => (
                <div>{filteredItem.times.map(time => (
                    <div className="bus-option">
                        <div className="listed-option">
                            <p>{time}</p>
                            <p className="listed-wait">– in {findY(time)} mins</p>
                        </div>
                        <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
                    </div>
                ))}</div>
            ))} */}

            {/* { filter && availableBuses.filter(item => item.num === bus).map(filteredItem => (
                <div>{filteredItem.times.filter(time => !time.includes("4:") && !time.includes("5:")).map(time => (
                    <div className="bus-option">
                        <div className="listed-option">
                            <p>{time}</p>
                            <p className="listed-wait">– in {findY(time)} mins</p>
                        </div>
                        <Link to="/booked" className="reserve-button" onClick={() => handleClick(time)}>Reserve</Link>
                    </div>
                ))}</div>
            ))} */}


        </motion.div>
    )
}

export default Schedule;
