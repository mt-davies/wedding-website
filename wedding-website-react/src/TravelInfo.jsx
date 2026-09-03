import { useEffect, useState } from 'react';

const TravelInfo = () => {
  const [airports, setAirports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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

  return (
  <div>

<h1>Travel Information</h1>


    <h2>Closest Airports</h2>

    {isLoading && <p>Loading airports...</p>}
    {error && <p>{error}</p>}
    {!isLoading && !error && airports.map((airport) => (
      <div key={airport.name}>
        <h4>{airport.name}</h4>
        <p>{airport.location} - {airport.milesAway} miles from Nauvoo </p>
        {airport.note && <p>{airport.note}</p>}
      </div>
    ))}

<br></br>

    <h2>Block Hotel Rooms</h2>
    <p>There is a strong possibility that we will have block hotel rooms available in Nauvoo for family and friends traveling long distances. More information to come. Contact Hannah or Miles if you think you will need a hotel for the night before and/or after the wedding. </p>



<br></br>
  </div>
  );
};

export default TravelInfo;