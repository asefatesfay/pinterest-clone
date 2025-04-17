import { Link } from "react-router";
import PostInteractions from "../../components/postInteractions/postInteractions";
import "./postPage.css";
import Comments from "../../components/comments/comments";

const PostPage = (props) => {
  return (
    <div className="postPage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="20"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path
          d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
          data-name="4-Arrow Left"
        />
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <img src="/pins/pin1.jpeg" />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className="postUser">
            <img src="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
