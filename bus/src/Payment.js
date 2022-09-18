import { motion } from 'framer-motion';

const Payment = () => {
    return(
        <motion.div id="transaction-end"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth}}
        >
            <p>Thanks for using time.ly</p>
            <p>We wish you a safe trip!</p>
        </motion.div>
    )
}

export default Payment;