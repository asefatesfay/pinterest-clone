import './postInteractions.css';

const PostInteractions = (props) => {
    return(
        <div className="postInteractions">
            <div className="interactionIcons">
                <img src="/general/react.svg" alt="like" />
                273
                <img src="/general/share.svg" alt="share" />
                <img src="/general/more.svg" alt="more" />
            </div>
            <button>Save</button>
        </div>
    )
}

export default PostInteractions;