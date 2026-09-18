import { useEffect, useState } from 'react';

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

      <h1>Travel Information</h1>

      <h2>Block Hotel Rooms</h2>
      <p>There is a strong possibility that we will have block hotel rooms available in Nauvoo for family and friends traveling long distances. More information to come. Contact Hannah or Miles if you think you will need a hotel for the night before and/or after the wedding. </p>


      <h2>Closest Airports</h2>

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
          <h4>{airport.name} ({airport.code})</h4>
          <p>{airport.location} - {airport.milesAway} miles from Nauvoo </p>
          {airport.note && <p style={{fontStyle:"italic"}}>{airport.note}</p>}
        </div>
      ))}

      <br></br>

      


      <br></br>
    </div>
  );
};

export default TravelInfo;