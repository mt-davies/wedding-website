import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import Announcement from './Announcement'
import TravelInfo from './TravelInfo'
import Schedule from './Schedule'
import Registry from './Registry'
import ScrollToTop from './ScrollToTop'
import GuestInfo from './GuestInfo'
import Colors from './Colors'

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


          <Route
            path="/registry"
            element={
              <Registry />
            }
          />
          <Route
            path="/guestinfo"
            element={
              <GuestInfo />
            }
          />

          <Route
            path="/colors"
            element={
              <Colors />
            }
          />

        </Routes>

      </Router>




    </div>
  );
}

export default App
