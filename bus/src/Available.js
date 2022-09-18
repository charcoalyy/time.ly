import { Link } from "react-router-dom";
import Back from "./Back";
import { availableBuses } from "./Data";
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { motion } from 'framer-motion';

const Available = ({destination, setBus}) => {
    const handleClick = (number) => {
        setBus(number)
    }

    return(
        <motion.div className="available" 
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth}}
        >
            <Back />
            <h1>Bus options</h1>
            <h3>From Waterloo to {destination}</h3>

            {availableBuses.map(item => (
                <Link to="/schedule" className="bus-option bus-list" key={item.num} onClick={() => handleClick(item.num)}>
                    <p>Bus #{item.num}</p>
                    <MdOutlineArrowForwardIos className="bus-link" />
                </Link>
            ))}
        </motion.div>
    )
}

export default Available;