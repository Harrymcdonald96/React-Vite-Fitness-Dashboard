import { NavLink } from 'react-router-dom';
import { FiHome, FiActivity, FiBookOpen, FiTarget, FiCalendar, FiBarChart2, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import 'src/styles/Sidebar.css'; 

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <NavLink exact to="/" className="menu-link" activeClassName="active">
        <FiHome className="icon"/><span className="text-label">Overview</span>
      </NavLink>
      <NavLink to="/workout" className="menu-link" activeClassName="active">
        <FiActivity className="icon"/><span className="text-label">Workout</span>
      </NavLink>
      <NavLink to="/diet-plan" className="menu-link" activeClassName="active">
        <FiBookOpen className="icon"/><span className="text-label">Diet Plan</span>
      </NavLink>
      <NavLink to="/goals" className="menu-link" activeClassName="active">
        <FiTarget className="icon"/><span className="text-label">Goals</span>
      </NavLink>
      <NavLink to="/schedule" className="menu-link" activeClassName="active">
        <FiCalendar className="icon"/><span className="text-label">My Schedule</span>
      </NavLink>
      <NavLink to="/progress" className="menu-link" activeClassName="active">
        <FiBarChart2 className="icon"/><span className="text-label">Progress</span>
      </NavLink>
      <NavLink to="/help" className="menu-link" activeClassName="active">
        <FiHelpCircle className="icon"/><span className="text-label">Help</span>
      </NavLink>
      <NavLink to="/logout" className="menu-link" activeClassName="active">
        <FiLogOut className="icon"/><span className="text-label">Logout</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
