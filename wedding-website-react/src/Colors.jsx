import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Colors = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');



    return (
        <div>


            <Navbar></Navbar>

            <h2>Colors</h2>

            <a href='https://docs.google.com/document/d/1BWyIsdNy17RWUSm3ED6dgebT1WgfgngWVcD-pyHLb1I/edit?usp=sharing'>Colors document</a>

            <Footer></Footer>

        </div>
    );
};

export default Colors;