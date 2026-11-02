import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const GallerySelect = () => {


    const [daysUntil, setDaysUntil] = useState("");
    const [hoursUntil, setHoursUntil] = useState("");
    const [minutesUntil, setMinutesUntil] = useState("");
    const [secondsUntil, setSecondsUntil] = useState("");

    const [weddingTime, setWeddingTime] = useState("2027-02-27T16:00:00.000Z"); //10 am Nauvoo time, aka 16:00 UTC

    






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
