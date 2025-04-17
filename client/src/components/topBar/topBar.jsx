import UserButton from "../userButton/userButton";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* Search */}
      <div className="search">
        <img src="/general/search.svg" alt="Search" className="searchIcon" />
        <input type="text" placeholder="Search" className="searchInput" />
      </div>
      {/* User Button */}
      <UserButton />
    </div>
  );
};

export default TopBar;
