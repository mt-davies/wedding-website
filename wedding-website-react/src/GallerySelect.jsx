import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const GallerySelect = () => {


    const [daysUntil, setDaysUntil] = useState("");
    const [hoursUntil, setHoursUntil] = useState("");
    const [minutesUntil, setMinutesUntil] = useState("");
    const [secondsUntil, setSecondsUntil] = useState("");

    const [weddingTime, setWeddingTime] = useState("2027-02-27T16:00:00.000Z"); //10 am Nauvoo time, aka 16:00 UTC

    useEffect(() => {


        const calculateTimeUntil = () => {

            const now = new Date();

            // Convert the state string into a Date object and subtract
            const differenceInMs = new Date(weddingTime) - now;
            let remainderInMs = differenceInMs;

            const daysLeft = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
            setDaysUntil(daysLeft);
            remainderInMs -= daysLeft * (1000 * 60 * 60 * 24); //get rest of ms left after full days taken out

            const hoursLeft = Math.floor(remainderInMs / (1000 * 60 * 60));
            setHoursUntil(hoursLeft);
            remainderInMs -= hoursLeft * (1000 * 60 * 60);

            const minutesLeft = Math.floor(remainderInMs / (1000 * 60));
            setMinutesUntil(minutesLeft);
            remainderInMs -= minutesLeft * (1000 * 60);

            setSecondsUntil(Math.floor(remainderInMs / (1000)));

        };

        setInterval(calculateTimeUntil, 1000);

    }, []);






    return (


        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h1>Gallery</h1>

            <div className="homepage-button-links">





                {true && <Link to="/gallery/photos/engagement" className="image-link temple-image">Engagement Photoshoots</Link>}

                {true && <Link to="/gallery/photos/dating" className="image-link guest-info-image">Our Story Through Photos</Link>}


            </div>


            <br></br>

        </div>




    );
};

export default GallerySelect;
