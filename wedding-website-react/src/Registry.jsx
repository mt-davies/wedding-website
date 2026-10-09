import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Registry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h2>Registry</h2>

            <a href='https://www.zola.com/registry/hannahandmilesfebruary27 '>Zola</a>
            <br></br>

            <a href='https://www.amazon.com/wedding/share/TwoFrogsInAPond'>Amazon</a>

        </div>
    );
};

export default Registry;