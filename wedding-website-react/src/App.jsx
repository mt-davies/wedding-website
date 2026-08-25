import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Announcement from './Announcement'
import TravelInfo from './TravelInfo'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/wedding-website" element={<Navigate to="/wedding-website/announcement" replace />} />
          <Route
            path="/wedding-website/announcement"//TODO: update paths to what they'll be on the published website
            element={
              <Announcement />
            }
          />

          <Route
            path="/wedding-website/travel"//TODO: update paths to what they'll be on the published website
            element={
              <TravelInfo />
            }
          />

        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App
