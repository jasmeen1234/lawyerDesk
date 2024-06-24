import Diversity3Icon from '@mui/icons-material/Diversity3';
import HouseIcon from '@mui/icons-material/House';
import GavelIcon from '@mui/icons-material/Gavel';
import FeedIcon from '@mui/icons-material/Feed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2.5 bg-gray-100 text-white">
      <div className="flex items-center">
        <img src='/logo.png' alt="Advocase Logo" className="w-36" />
      </div>
      <div className="flex gap-5">
        <button className="flex items-center text-black bg-transparent border-none cursor-pointer text-base p-1.5 mt-0.5 rounded">
          <FeedIcon className="mr-3.5" /> News Feed
        </button>
        <button className="flex items-center text-black bg-transparent border-none cursor-pointer text-base p-1.5 mt-0.5 rounded">
          <GavelIcon className="mr-3.5" /> Find Lawyers
        </button>
        <button className="flex items-center text-white bg-gradient-to-r from-blue-600 to-blue-900 rounded-full px-6 py-1 mt-0.5">
          <HouseIcon className="mr-3.5" /> Home
        </button>
        <button className="flex items-center text-black bg-transparent border-none cursor-pointer text-base p-1.5 mt-0.5 rounded">
          <Diversity3Icon className="mr-3.5" /> Connections
        </button>
        <button className="flex items-center text-black bg-transparent border-none cursor-pointer text-base p-1.5 mt-0.5 rounded">
          <ChatBubbleOutlineIcon className="mr-3.5" /> Chats
        </button>
      </div>
      <div className="flex items-center gap-5">
        <NotificationsIcon className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl" />
        <SettingsIcon className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl" />
        <img src="./myImage.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </nav>
  );
}

export default Navbar;
