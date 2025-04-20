import "./userButton.css";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";

const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const location = useLocation();

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the popup when the route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return currentUser ? (
    <div className="userButton" ref={popupRef}>
      <img src="/general/noAvatar.png" alt="user" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        src="/general/arrow.svg"
        alt="arrow"
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <Link className="userOption" to="/profile">
            Profile
          </Link>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
