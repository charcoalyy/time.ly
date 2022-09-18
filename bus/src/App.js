import { BrowserRouter as Router } from 'react-router-dom';
import Emby from './animationnn';

function App() {  
  return (
    <Router>
      <div className="App">
            <Emby />
            <div className="border"></div>
      </div>
    </Router>
  );
}

export default App;
