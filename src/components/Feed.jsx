import React, { useState, useEffect } from "react";

import Tweetbox from "./TweetBox";
import Post from "./Post";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import db from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../redux/PostsSlice.js";

import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Feed = () => {
  const dispatch = useDispatch();
  const [blur, setBlur] = useState(false);
  const posts = useSelector((state) => state.posts.posts);

  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop > 100) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  useEffect(() => {
    const getPosts = collection(db, "posts");
    const q = query(getPosts, orderBy("createdAt", "desc"));

    getDocs(q)
      .then((response) => {
        dispatch(
          fetchPost(
            response.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch, posts]);

  return (
    <div onScroll={handleScroll} className="feed">
      <div className={`feed__header ${blur === true ? "active" : ""}  `}>
        <h3>Home</h3>
        <AutoAwesomeOutlinedIcon className="popular__icon"></AutoAwesomeOutlinedIcon>
      </div>

      <Tweetbox></Tweetbox>

      {posts.map(({ data, id }) => (
        <Post
          id={id}
          displayname={data.displayName}
          username={data.username}
          verified={data.verified}
          text={data.text}
          avatar={data.avatar}
          image={data.selectedImage}
        ></Post>
      ))}
    </div>
  );
};

export default Feed;
