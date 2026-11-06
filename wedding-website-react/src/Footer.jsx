import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate } from 'react-router-dom';


function Footer() {
    // 1. Create state to track open/closed status
    const [isOpen, setIsOpen] = useState(false);

    // 2. Toggle function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isAnnouncementPage = pathname === '/'; // Use your Announcement route
    const isGalleryPage = pathname.startsWith('/gallery/') && pathname.length > '/gallery/'.length;
    const handleBack = () => {
        navigate(isGalleryPage ? '/gallery' : '/'); // Use your Gallery Select route
    };

    return (
        <nav className='footer'>
            <br></br>

            <img src='..\images\frog-pond.png' className='footer-img'></img>
        </nav>
    );
}

export default Footer;