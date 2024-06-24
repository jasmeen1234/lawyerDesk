// src/HomeComponent/HomePage.js

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faNewspaper, faGavel, faUsers, faComments, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HouseIcon from '@mui/icons-material/House';
import GavelIcon from '@mui/icons-material/Gavel';
import FeedIcon from '@mui/icons-material/Feed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Home() {
  return (
    <nav className="navbar">
       <div className="navbar-logo">
        <img src='/logo.png' alt="Advocase Logo" style={{ width: '150px' }} />
    </div>
      <div className="navbar-center">
        <button className="home-button">
          <FeedIcon/> News Feed
        </button>
        <button className="home-button">
          <GavelIcon /> Find Lawyers
        </button>
        <button className="special-home">
          <HouseIcon/> Home
        </button>
        <button className="home-button">
         < Diversity3Icon/> Connections
        </button>
        <button className="home-button">
          <ChatBubbleOutlineIcon /> Chats
        </button>
      </div>
      <div className="navbar-profile">
        <NotificationsIcon className="icon" />
        <SettingsIcon className="icon" />
        <img src="./myImage.jpg" alt="Profile" />
      </div>
    </nav>
  );
}

export default Home;
