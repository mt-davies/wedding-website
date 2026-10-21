import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const TravelInfo = () => {
  const [airports, setAirports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedValue, setSelectedValue] = useState('recommended');
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    const loadAirports = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}airports.json`);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setAirports(await response.json());
      } catch {
        setError('Airport information could not be loaded.');
      } finally {
        setIsLoading(false);
      }
    };

    loadAirports();
  }, []);

  const sortedAirports = [...airports].sort((first, second) => {
    if (selectedValue === 'distance') {
      return Number(first.milesAway) - Number(second.milesAway);
    }

    if (selectedValue === 'busiest') {
      return Number(second.numFlights) - Number(first.numFlights);
    }

    return Number(first.preferredOrder) - Number(second.preferredOrder);
  });


const handleChange = (event) => {
  setHasSelected(true);
  setSelectedValue(event.target.value);
};




  return (
    <div>

      <Link to="/" style={{color: 'black'}}>Back to Home</Link>

      <h1>Travel Information</h1>

      <h2 style={{marginTop: "60px", marginBottom: "20px", fontSize: "35px"}}>Block Hotel Rooms</h2>
      <p>There is a strong possibility that we will have block hotel rooms available in Nauvoo for family and friends traveling long distances. More information to come. <a href="mailto:kilometerandpalindrome@gmail.com">Contact us</a> if you think you will need a hotel for the night before and/or after the wedding. </p>


<h2 style={{marginTop: "60px", marginBottom: "20px", fontSize: "35px"}}>Notes for Drivers</h2>
      <p>If you cross the Mississippi River at Fort Madison, there is a $2.50 cashless toll to cross the bridge from either direction. This can be avoided by driving through Keokuk or Burlington instead. </p>
      <p>Winters in the Midwest can be unpredictable. We are hoping for nice weather, but if isn't, please be safe. If any changes to our schedule are made due to weather, we will post an update on this website. </p>

      <h2 style={{marginTop: "60px", fontSize: "35px"}}>Closest Airports</h2>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end'}}>
        <select className="travel-sort" value={selectedValue} onChange={handleChange}>
          <option value="recommended">{hasSelected ? 'Recommended' : 'Sort By'}</option>
          <option value="distance">Closest First</option>
          <option value="busiest">Most Flights</option>
        </select>
      </label>


      {isLoading && <p>Loading airports...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && sortedAirports.map((airport) => (
        <div className="airport-card" key={airport.name}>
          <h3>{airport.name} ({airport.code})</h3>
          <p>{airport.location} - {airport.milesAway} miles from Nauvoo </p>
          <p>Estimated drive time: {airport.driveTime}</p>
          {airport.note && <p style={{fontStyle:"italic"}}>{airport.note}</p>}
        </div>
      ))}

      <br></br>

      


      <br></br>
    </div>
  );
};

export default TravelInfo;