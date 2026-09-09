import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import Announcement from './Announcement'
import TravelInfo from './TravelInfo'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"//Main site also routes to Announcement
            element={
              <Announcement />
            }
          />  


          <Route
            path="/announcement"//TODO: update paths to what they'll be on the published website
            element={
              <Announcement />
            }
          />

          <Route
            path="/travel"//TODO: update paths to what they'll be on the published website
            element={
              <TravelInfo />
            }
          />

        </Routes>

      </Router>




    </div>
  );
}

export default App
