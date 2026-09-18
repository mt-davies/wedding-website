import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Announcement = () => {


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

      <br></br>

      <h1 style={{ fontFamily: "var(--font-cursive)", fontSize: "clamp(2.25rem, 7vw, 5rem)" }}>Hannah McGinty</h1>
      <h3 style={{ fontFamily: "var(--font-cursive)" }}>and</h3>
      <h1 style={{ fontFamily: "var(--font-cursive)", fontSize: "clamp(2.25rem, 7vw, 5rem)" }}>Miles Davies</h1>
      <h2 style={{ fontStyle: "italic" }}> are getting married!</h2>


      <div className="main-image-container">
        <img
          className="main-image"
          src="..\images\gallery\IMG_20260907_111453.jpg"
          alt="Wedding Announcement"
        ></img>




        <p className="main-image-text">{daysUntil} {daysUntil === "" ? "" : daysUntil == 1 ? "Day " : "Days "}
          {hoursUntil} {hoursUntil === "" ? "" : hoursUntil == 1 ? "Hour " : "Hours "}
          {minutesUntil} {minutesUntil === "" ? "" : minutesUntil == 1 ? "Minute " : "Minutes "}
          {secondsUntil} {secondsUntil === "" ? "" : secondsUntil == 1 ? "Second " : "Seconds "}
        </p>


      </div>

      <br></br>
      <h2>February 27, 2027</h2>
      <h2>Nauvoo, Illinois</h2>


      <div className="homepage-button-links">

        <a className="image-link tree-image" href="https://www.zola.com/wedding-planning/digital-save-the-date/Wj2Z4wO48">Request an Invite</a>



        <Link to="/travel" className="image-link travel-image">Travel Info</Link>
        
        {false && <Link to="/schedule" className="image-link temple-image">Schedule</Link>}

        {false && <Link to="/guestinfo" className="image-link guest-info-image">Guest Info</Link>}

        {false && <Link to="/registry" className="image-link frog-image">Gift Registry</Link>}

        {false && <Link to="/gallery" className="image-link looking-at-temple-image">Gallery</Link>}

      </div>


      <br></br>

    </div>




  );
};

export default Announcement;
