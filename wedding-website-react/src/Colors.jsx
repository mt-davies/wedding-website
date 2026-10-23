import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Colors = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');



    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2>Colors</h2>

            <a href='https://docs.google.com/document/d/1BWyIsdNy17RWUSm3ED6dgebT1WgfgngWVcD-pyHLb1I/edit?usp=sharing'>Colors document</a>

            <p>More info to come</p>

        </div>
    );
};

export default Colors;