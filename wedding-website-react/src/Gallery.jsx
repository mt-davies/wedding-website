import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedValue, setSelectedValue] = useState('recommended');
  const [hasSelected, setHasSelected] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}images/gallery/engagement/engagement.json`);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setImages(await response.json());
      } catch {
        setError('Images could not be loaded.');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const sortedImages = [...images].sort((first, second) => {
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

      <h1>Gallery</h1>

      

      <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end'}}>
        <select className="travel-sort" value={selectedValue} onChange={handleChange}>
          <option value="recommended">{hasSelected ? 'Recommended' : 'Sort By'}</option>
          <option value="distance">Closest First</option>
          <option value="busiest">Most Flights</option>
        </select>
      </label>


      {isLoading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && sortedImages.map((image) => (
        <div className="airport-card" key={image.filename}>
          <h3>{image.filename}</h3>
          <img className="main-image" src={`../images/gallery/engagement/${image.filename}`}></img>
          {image.caption && <p style={{fontStyle:"italic"}}>{image.caption}</p>}
        </div>
      ))}

      <br></br>

      


      <br></br>
    </div>
  );
};

export default Gallery;