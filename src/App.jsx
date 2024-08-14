// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Overview from './components/pages/Overview';
import Workout from './components/pages/Workouts';
import DietPlan from './components/pages/DietPlan';
import Goals from './components/pages/Goals';
import Schedule from './components/pages/MySchedule';
import Progress from './components/pages/Progress';
import Help from './components/pages/Help';
import Logout from './components/pages/Logout';
import 'src/App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/workout" element={<Workout />} />
              <Route path="/diet-plan" element={<DietPlan />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
