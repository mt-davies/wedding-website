import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { LuExternalLink } from "react-icons/lu";
import Navbar from './Navbar';
import Footer from './Footer';

const Registry = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Navbar></Navbar>

            <h2>Gift Registry</h2>

            <p>We have items on both Zola and Amazon.</p>

            <br></br>

            <div className='registry-containers'>
                <a className='button-link' target="_blank" rel="noopener" href='https://www.zola.com/registry/hannahandmilesfebruary27 '>View Zola Registry <LuExternalLink aria-hidden="true" size={14} /></a>

            </div>

            <br></br>

            <div className='registry-containers'>
                <a className='button-link' target="_blank" rel="noopener" href='https://www.amazon.com/wedding/share/TwoFrogsInAPond'>View Amazon Registry <LuExternalLink aria-hidden="true" size={14} /></a>
            </div>

            <p></p>

            <img className="guest-info-images" src='..\images\caseys-vs-maverik.png'></img>

            <Footer></Footer>

        </div>
    );
};

export default Registry;