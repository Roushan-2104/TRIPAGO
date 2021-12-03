import './Triplist.css'
import {useState} from 'react'
import useFetch from '../hooks/useFetch'

export default function Triplist() {
    const [url, setUrl] = useState('http://localhost:3000/trips')        
    const {data : trips, isPending, error} = useFetch(url, {type: 'Get'})


    return (    
        <div className='trip-list'>
            <h1>Trip List</h1>
            {isPending && 
                <div>Loading Trips .......</div>
            }
            {error && <p>{error}</p>}
            
            <ul>
                {trips && trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className='filters'>
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
                    European Trips
                </button>
                <button onClick={() => setUrl('http://localhost:3000/trips')}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
