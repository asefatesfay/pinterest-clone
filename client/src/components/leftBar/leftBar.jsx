import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/">
          <img src="/general/logo.png" alt="Logo" className="logo" />
        </a>
        <a href="/">
          <img src="/general/home.svg" alt="Home" className="menuIcon" />
        </a>
        <a href="/">
          <img src="/general/create.svg" alt="Logo" className="menuIcon" />
        </a>
        <a href="/">
          <img src="/general/updates.svg" alt="Updates" className="menuIcon" />
        </a>
        <a href="/">
          <img
            src="/general/messages.svg"
            alt="Messages"
            className="menuIcon"
          />
        </a>
      </div>
      <a href="/">
        <img src="/general/settings.svg" alt="Settings" className="menuIcon" />
      </a>
    </div>
  );
};
export default LeftBar;
