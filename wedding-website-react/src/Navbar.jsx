import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate } from 'react-router-dom';


function Navbar() {
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
        <nav className="navbar">
            <br></br>

            {!isAnnouncementPage && (
                <button type="button" className="back-button" onClick={handleBack}>
                    <GoArrowLeft />

                </button>
            )}

            <button
                type="button"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="nav-options"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* 4. Conditional rendering or CSS class for options */}
            <ul
                id="nav-options"
                className={`nav-options ${isOpen ? 'active' : ''}`}
            >
                <li><a href="#">HOME</a></li>
                <li><a href="#guestinfo">GUEST INFO</a></li>
                <li><a href="#travel">TRAVEL INFO</a></li>
                <li><a href="#schedule">SCHEDULE</a></li>
                <li><a href="#registry">REGISTRY</a></li>
                <li><a href="#gallery">GALLERY</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;