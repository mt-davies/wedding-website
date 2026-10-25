import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Registry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2>Gift Registry</h2>

            <p>We have items on both Zola and Amazon.</p>

            <br></br>

            <div className='registry-containers'>
                <a className='button-link' href='https://www.zola.com/registry/hannahandmilesfebruary27 '>View Zola Registry</a>

            </div>

            <br></br>

            <div className='registry-containers'>
                <a className='button-link' href='https://www.amazon.com/wedding/share/TwoFrogsInAPond'>View Amazon Registry</a>
            </div>
        </div>
    );
};

export default Registry;