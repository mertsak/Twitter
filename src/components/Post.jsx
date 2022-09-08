import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import { doc, deleteDoc } from "firebase/firestore";
import db from "../firebase";

import CloseIcon from "@mui/icons-material/Close";

const Post = ({ displayname, username, verified, text, image, avatar, id }) => {
  const handleClose = (id) => {
    deleteDoc(doc(db, "posts", id));
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar alt="Travis Howard" src={avatar} />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__header__text">
            <h3>{displayname}</h3>
            {verified && <VerifiedIcon className="post__badge"></VerifiedIcon>}
            <span className="post__header__special">@{username}</span>
          </div>

          <div className="post__header__description">
            <p>{text}</p>
          </div>

          {image && <img src={require(`../assets/${image}`)} alt="" />}
        </div>

        <div className="post__footer">
          <span className="comment">
            <ChatBubbleOutlineOutlinedIcon className="comment__icon"></ChatBubbleOutlineOutlinedIcon>
            <span className="comment__text">65</span>
          </span>
          <span className="retweet">
            <RepeatOutlinedIcon className="retweet__icon"></RepeatOutlinedIcon>
            <span className="retweet__text">1,200</span>
          </span>
          <span className="like">
            <FavoriteBorderOutlinedIcon className="like__icon"></FavoriteBorderOutlinedIcon>
            <span className="like__text">3,000</span>
          </span>
          <span className="dowland">
            <PublishIcon className="dowland__icon"></PublishIcon>
            <span className="dowland__text">40</span>
          </span>
        </div>
      </div>

      <div onClick={() => handleClose(id)} className="post__close">
        <CloseIcon></CloseIcon>
      </div>
    </div>
  );
};

export default Post;

// displayname username verified text image avatar
