import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ill from './bus_illo_v2.png';

const Payment = ({setDate}) => {
    return(
        <motion.div id="transaction-end"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth}}
        >
            <Link to="/" onClick={() => setDate(null)}><img src={ill} alt="bus illustration" id="bus-illustration"></img></Link>
            <p>Thanks for using time.ly ♡</p>
            <p>We wish you a safe trip!</p>
        </motion.div>
    )
}

export default Payment;