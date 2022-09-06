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

          <img src={require(`../assets/${image}`)} alt="" />
        </div>

        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
          <RepeatOutlinedIcon></RepeatOutlinedIcon>
          <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          <PublishIcon></PublishIcon>
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
