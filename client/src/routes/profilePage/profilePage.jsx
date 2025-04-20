import "./profilePage.css";
import React, { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <img src="/general/noAvatar.png" alt="avatar" className="profileImg" />
      <h1 className="profileName">John Doe</h1>
      <span className="profileHandle">@johndoe</span>
      <div className="followCounts">10 followers . 20 following</div>
      <div className="profileInteractions">
        <img src="/general/share.svg" alt="share" />
        <div className="interactionButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <img src="/general/more.svg" alt="more" />
      </div>
      <div className="profileOptions">
        <span
          className={type === "created" ? "active" : ""}
          onClick={() => setType("created")}
        >
          Created
        </span>
        <span
          className={type === "saved" ? "active" : ""}
          onClick={() => setType("saved")}
        >
          Saved
        </span>
      </div>
      {type ==="created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
