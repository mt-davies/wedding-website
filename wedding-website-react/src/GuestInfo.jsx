import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const GuestInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2 className='guest-info-header'>Attire</h2>

            <p>Most guests should wear their Sunday best. You do not need to wear the wedding colors unless you are part of the wedding party or immediate family. Just don't wear a white dress unless you're the bride 😉</p>
            {/* <p>Most guests should wear their Sunday best. You do not need to wear the wedding colors (but they are <Link to="/colors">here</Link> if you would like to) unless you are part of the wedding party or immediate family. Just don't wear a white dress unless you're the bride 😉</p> */}

            <p>Bonus points for wearing clothes you can dance in. "Be prepared to bust a move!" </p>
            <a className='button-link' target="_blank" rel="noopener" href='https://docs.google.com/document/d/1BWyIsdNy17RWUSm3ED6dgebT1WgfgngWVcD-pyHLb1I/edit?usp=sharing'>Attire information for family and wedding party</a>
            
            <h2 className='guest-info-header'>Kids</h2>
            <p>Kids are 100% welcome at the ring ceremony/reception. We need their help to keep the dance floor alive! </p>
            <p>If you are attending the sealing and have kids that need supervision, please let us know when you RSVP.</p>

            <h2 className='guest-info-header'>Parking</h2>
            <p>There is plenty of parking near the church where the reception/ring ceremony is held. Do not park on the street in front of the temple.</p>

            <img className="guest-info-images"   src='..\images\parking_map.png'></img>

            <h2 className='guest-info-header'>Contact Us</h2>
            <a style={{ paddingBottom: '100px'}} href="mailto:kilometerandpalindrome@gmail.com">KilometerandPalindrome@gmail.com</a>

        </div>
    );
};

export default GuestInfo;