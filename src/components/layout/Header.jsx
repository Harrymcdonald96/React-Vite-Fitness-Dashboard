import { FiSettings, FiBell } from 'react-icons/fi';
import '../../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
    <div className="logo-container">
    <img src="../../assets/A-PEX.png" alt="A-PEX Fitness Logo" />
</div>
    <div className="vertical-divider"></div> 
    <div className="welcome-message">
      <span className="greeting">Good Morning!</span>
      <span className="user-welcome">Welcome Back!</span>
    </div>
    <div className="user-info">
      <img src="src/assets/Avatar w. photo.png" alt="User Profile" className="profile-pic"/>
      <FiBell className="notification-icon"/>
      <FiSettings className="settings-icon"/>
    </div>
  </div>
  
  );
};

export default Header;
