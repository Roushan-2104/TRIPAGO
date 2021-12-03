import './App.css';
import {useState} from 'react'
import Triplist from './components/Triplist';


function App() {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className="App">
      <div className='btn-area'>
        <button onClick={()=> {setShowTrips(false)}} style={{marginRight:'10px'}}>Hide trips</button>
        <button onClick={()=> {setShowTrips(true)}}>Show trips</button>
      </div>
      
      { showTrips && <Triplist/> }
    </div>
  );
}

export default App;
