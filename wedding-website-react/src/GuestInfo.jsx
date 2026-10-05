import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const GuestInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2>Attire</h2>

            <p>Most guests should wear their Sunday best. You do not need to wear the wedding colors (but they are <Link to="/colors">here</Link> if you would like to) unless you are part of the wedding party or immediate family. Just don't wear a white dress unless you're the bride 😉</p>
            <p>Bonus points for wearing clothes you can dance in. </p>
            
            <h2>Food</h2>

            <h2>Parking</h2>
            <p>There is plenty of parking near the church where the reception/ring ceremony is held. Do not park on the street in front of the temple.</p>
            <h4>Map</h4>

            <h2>Contact Us?</h2>

        </div>
    );
};

export default GuestInfo;