import { Route, Routes, useLocation } from 'react-router-dom';
import Selection from './Selection';
import Available from './Available';
import Booked from './Booked';
import { useState } from 'react';
import Schedule from './Schedule';
import End from './End';
import { AnimatePresence } from 'framer-motion';

const Emby = () => {
    const[start, setStart] = useState(null);
    const[destination, setDestination] = useState(null);
    const[date, setDate] = useState(null);
    const[bus, setBus] = useState(null);
    const[time, setTime] = useState(null);
    const[arrival, setArrival] = useState(null);

    const location = useLocation();

    return(
            <AnimatePresence
            mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route exact path="/" element={<Selection start={start} setStart={setStart} destination={destination} setDestination={setDestination} date={date} setDate={setDate} arrival={arrival} setArrival={setArrival}/>}/>
                    <Route path="available" element={<Available destination={destination} setDestination={setDestination} setBus={setBus}/>}/>
                    <Route path="schedule" element={<Schedule bus={bus} time={time} setTime={setTime}/>}/>
                    <Route path="booked" element={<Booked setBus={setBus} bus={bus} time={time} setTime={setTime} destination={destination} setDate={setDate}/>}/>
                    <Route path="payment" element={<End setDate={setDate} />} />
                </Routes>
            </AnimatePresence>
    )
}

export default Emby;