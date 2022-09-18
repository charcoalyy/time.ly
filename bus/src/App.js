import { BrowserRouter as Router } from 'react-router-dom';
import Emby from './animationnn';

function App() {
  // const[start, setStart] = useState(null);
  // const[destination, setDestination] = useState(null);
  // const[date, setDate] = useState(null);
  // const[bus, setBus] = useState(null);
  // const[busID, setBusID] = useState(null);
  // const[time, setTime] = useState(null);

  // const[data, setData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/buses").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])
  
  return (
    <Router>
      <div className="App">
          {/* <div className="test">
            {(typeof data.buses === 'undefined') ? (
                <p>Loading buses...</p>
            ) : (
                data.buses.map((bus, i) => (
                  <div key={i}>
                    <p>{bus.num}</p>
                  </div>
                ))
            )}
          </div> */}
      
          {/* <Routes> */}
            {/* <Route exact path="/" element={<Selection start={start} setStart={setStart} destination={destination} setDestination={setDestination} date={date} setDate={setDate}/>}/>
            <Route path="available" element={<Available setBusID={setBusID} destination={destination} setDestination={setDestination} setBus={setBus}/>}/>
            <Route path="schedule" element={<Schedule bus={bus} time={time} setTime={setTime}/>}/>
            <Route path="booked" element={<Booked setBus={setBus} bus={bus} time={time} setTime={setTime} destination={destination}/>}/>
            <Route path="payment" element={<Payment />} /> */}
            <Emby />
          {/* </Routes> */}
      </div>
    </Router>
  );
}

export default App;
