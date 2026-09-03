import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



const Announcement = () => {


  const [daysUntil, setDaysUntil] = useState(0);
  const [hoursUntil, setHoursUntil] = useState(0);
  const [minutesUntil, setMinutesUntil] = useState(0);
  const [secondsUntil, setSecondsUntil] = useState(0);

  const [weddingTime, setWeddingTime] = useState("2027-02-27T16:00:00.000Z"); //10 am Nauvoo time, aka 16:00 UTC

  useEffect(() => {


    const calculateTimeUntil = () => {

      const now = new Date();

      // Convert the state string into a Date object and subtract
      const differenceInMs = new Date(weddingTime) - now;
      let remainderInMs = differenceInMs;

      const daysLeft = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      setDaysUntil(daysLeft);
      remainderInMs -= daysLeft*(1000 * 60 * 60 * 24); //get rest of ms left after full days taken out
      
      const hoursLeft = Math.floor(remainderInMs / (1000 * 60 * 60));
      setHoursUntil(hoursLeft);
      remainderInMs -= hoursLeft*(1000 * 60 * 60); 
      
      const minutesLeft = Math.floor(remainderInMs / (1000 * 60));
      setMinutesUntil(minutesLeft);
      remainderInMs -= minutesLeft*(1000 * 60); 
      
      setSecondsUntil(Math.floor(remainderInMs / (1000)));
      
    };

    setInterval(calculateTimeUntil, 1000);

  }, []);






  return (


    <div>

      <h1>February 27, 2027</h1>

<br></br>

      <p>{daysUntil} {daysUntil==1 ? "Day " : "Days "} 
        {hoursUntil} {hoursUntil==1 ? "Hour " : "Hours "} 
        {minutesUntil} {minutesUntil==1 ? "Minute " : "Minutes "} 
        {secondsUntil} {secondsUntil==1 ? "Second " : "Seconds "}</p>

        <br></br>

      <Link to="https://www.zola.com/wedding-planning/digital-save-the-date/Wj2Z4wO48">Request an Invite</Link>

      <br></br>

      <Link to="/travel">Travel Info</Link>

      

    </div>




  );
};

export default Announcement;
