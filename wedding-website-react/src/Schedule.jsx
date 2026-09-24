import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Schedule = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');






    return (
        <div>

            <Link to="/" style={{ color: 'black' }}>Back to Home</Link>

            <h1>Schedule</h1>

            <h5>February 27, 2027</h5>

            <div className="major-event">
                <h3>Private Temple Marriage Ceremony</h3>
                <p className="major-event-time">10:00 am</p>
                <p className="major-event-location">Nauvoo Temple</p>
                <p className="major-event-address"> 50 N Wells St, Nauvoo, IL</p>
                <p className="temple-disclaimer-short">Due to the sacred nature of temples in our religion, as well as very limited seating, only some members of our church will be able to attend the marriage and sealing ceremony. But don't worry, we want to celebrate this day with all our friends and loved ones, so we'll have a ring ceremony in the afternoon for everyone to attend! Along with many special moments during the reception...</p>
                <p>If you are attending this ceremony, please RSVP as soon as possible using the form we sent you.</p>
                <Link>More about Temple Ceremonies</Link>
            </div>

            <div className="major-event">
                <h3>Ring Ceremony</h3>
                <p className="major-event-time">4:00 pm</p>
                <p className="major-event-location">The Church of Jesus Christ of Latter-day Saints</p>
                <p className="major-event-address">380 N Durphy St, Nauvoo, IL 62354</p>
                <p>The ring ceremony will start promptly at 4. </p>
            </div>

            <div className="major-event">
                <h3>Reception</h3>
                <p className="major-event-time">4:30 pm</p>
                <p className="major-event-location">The Church of Jesus Christ of Latter-day Saints</p>
                <p className="major-event-address">380 N Durphy St, Nauvoo, IL 62354</p>
                <p>There will be refreshments following the ring ceremony. Then, get ready to dance! </p>
            </div>

            <br></br>




            <br></br>
        </div>
    );
};

export default Schedule;