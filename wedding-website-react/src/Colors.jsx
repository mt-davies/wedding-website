import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const GuestInfo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2>Colors</h2>

            <p>More info to come</p>

        </div>
    );
};

export default GuestInfo;