import { Link } from "react-router-dom";
import Back from "./Back";
import { availableBuses } from "./Data";
import { BsFillCreditCard2FrontFill, BsFillCreditCard2BackFill } from 'react-icons/bs'
import { useState } from "react";
import { motion } from 'framer-motion';

const Booked = ({bus, time, destination}) => {

    const[payment, setPayment] = useState(null);

    let i = availableBuses.findIndex(item => item.num === bus);

    let fullCurrent = new Date();

    const findY = (t) => {
        let givenHour = parseInt(t.substring(0, t.indexOf(':')));
        let givenMinutes = parseInt(t.substring(t.indexOf(':')+1))

        if (t.includes('PM')) {
            return ((givenHour + 12)*60 + givenMinutes - (fullCurrent.getHours()*60 + fullCurrent.getMinutes()));
        } else {
            return (givenHour*60 + givenMinutes - (fullCurrent.getHours()*60 + fullCurrent.getMinutes()));
        }
    }

    return(

        <motion.div className="booked"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth}}
        >
            <Back />
            <h1>Review Reservation</h1>
            <h3>Verify your payment and you're all set!</h3>

            <h5>Bus {bus}</h5>
            <table className="booked-section">
                <tr>
                    <td className="table-label">Wait time</td>
                    <td>{findY(time)} minutes</td>
                </tr>
                <tr>
                    <td className="table-label">Arrive by</td>
                    <td>{time}</td>
                </tr>
                <tr>
                    <td className="table-label">Arrive at</td>
                    <td>{destination} GO Station</td>
                </tr>
                <tr>
                    <td className="table-label">Your seat</td>
                    <td>36 / {availableBuses[i].total} passengers</td>
                </tr>
            </table>

            <h5>Payment</h5>
            <div className="booked-section" id="payment-section">
                <div className="payment-option">
                    <input type="radio" id="credit" name="pay" onClick={() => setPayment('credit')}></input>
                    <label for="credit">Pay with credit card {<BsFillCreditCard2FrontFill className="icon"/>}</label>
                    <div id="credit-card-number-input">  
                    {payment === 'credit' && <input id="credit-card-number" type="tel" inputMode="tel" pattern="[0-9\s]{13,19}" maxLength="19" placeholder={`XXXX XXXX XXXX XXXX`} className="notify-option"></input>}                </div>
                    </div>
                <div className="payment-option">
                    <input type="radio" id="metro" name="pay" onClick={() => setPayment('metro')}></input>
                    <label for="metro">Tap with metro card {<BsFillCreditCard2BackFill className="icon"/>}</label>
                </div>
            </div>

            <h5>Notify me by</h5>
            <div className="booked-section" id="booked-section-notify">
                <input type="text" placeholder="Email" className="notify-option"></input>
                <input type="number" placeholder="Phone" className="notify-option"></input>
            </div>

            <Link to="/payment" className="action-button">Confirm my spot</Link>
            <Link to="/" className="action-button" id="cancel">Cancel</Link>
        </motion.div>
    )
}

export default Booked;