import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import Announcement from './Announcement'
import TravelInfo from './TravelInfo'
import Schedule from './Schedule'
import ScrollToTop from './ScrollToTop'

function App() {


  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"//Main site also routes to Announcement
            element={
              <Announcement />
            }
          />  


          <Route
            path="/announcement"
            element={
              <Announcement />
            }
          />

          <Route
            path="/travel"
            element={
              <TravelInfo />
            }
          />

          <Route
            path="/schedule"
            element={
              <Schedule />
            }
          />

        </Routes>

      </Router>




    </div>
  );
}

export default App
