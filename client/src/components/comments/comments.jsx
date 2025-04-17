import "./comments.css";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
const Comments = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="avatar" />
          <div className="commentContent">
            <span className="commentUser">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="avatar" />
          <div className="commentContent">
            <span className="commentUser">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="avatar" />
          <div className="commentContent">
            <span className="commentUser">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="avatar" />
          <div className="commentContent">
            <span className="commentUser">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="avatar" />
          <div className="commentContent">
            <span className="commentUser">Jane Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment..." />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>😊</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
