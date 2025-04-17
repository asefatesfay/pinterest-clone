import {Link} from "react-router";
import "./galleryItem.css";
export const GalleryItem = ({ item }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img src={item.media} alt="pin" />
      <Link to={`/pin/${item.id}`} className="overlay"></Link>
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="share" />
        </button>
        <button>
          <img src="/general/share.svg" alt="share" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
