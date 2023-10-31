import "./topbar.css";
import { Search, Person, Chat, Notifications, ExitToApp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [showNotifications, setShowNotifications] = useState(false);
  

  const notifications = [
    { id: 1, text: "Jane followed you" },
    { id: 2, text: "Jane liked your post" },
    // Add more dummy data as needed
  ];

  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem('user');

    // Set the user to null using the dispatch method provided by the AuthContext
    dispatch({ type: 'LOGIN_FAILURE' });
  };

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lamasocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{ textDecoration: "none", color: "white"}}>
          <span className="topbarLink">Homepage</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleNotificationsClick}>
            <Person />
            <span className="topbarIconBadge">1</span>
            {showNotifications && (
              <div className="dropdown">
                {notifications.map((notification) => (
                  <div key={notification.id} className="notification">
                              <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg2"
          />
          {notification.text}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link to={`/messenger`} style={{ textDecoration: "none", color: "white"}}>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          </Link>
          <div className="topbarIconItem" onClick={handleLogout}>
            <ExitToApp />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}