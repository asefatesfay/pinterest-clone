import "./leftBar.css";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/">
          <img src="/general/logo.png" alt="Logo" className="logo" />
        </Link>
        <Link to="/">
          <img src="/general/home.svg" alt="Home" className="menuIcon" />
        </Link>
        <Link to="/create">
          <img src="/general/create.svg" alt="Logo" className="menuIcon" />
        </Link>
        <Link to="/">
          <img src="/general/updates.svg" alt="Updates" className="menuIcon" />
        </Link>
        <Link to="/">
          <img
            src="/general/messages.svg"
            alt="Messages"
            className="menuIcon"
          />
        </Link>
      </div>
      <Link to="/">
        <img src="/general/settings.svg" alt="Settings" className="menuIcon" />
      </Link>
    </div>
  );
};
export default LeftBar;
