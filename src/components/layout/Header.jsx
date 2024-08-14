import { FiSettings, FiBell } from 'react-icons/fi';
import '../../styles/Header.css';
import logo from 'src/assets/A-PEX.png';
import avatar from 'src/assets/AvatarPhoto.png';

const Header = () => {
  return (
    <div className="header">
    <div className="logo-container">
    <img src={logo} alt="A-PEX Fitness Logo" />
</div>
    <div className="vertical-divider"></div> 
    <div className="welcome-message">
      <span className="greeting">Good Morning!</span>
      <span className="user-welcome">Welcome Back!</span>
    </div>
    <div className="user-info">
    <img src={avatar} alt="User Profile" />
      <FiBell className="notification-icon"/>
      <FiSettings className="settings-icon"/>
    </div>
  </div>
  
  );
};

export default Header;
