import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import { collection, addDoc } from "firebase/firestore";

import db from "../firebase";

const TweetBox = () => {
  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docPosts = await addDoc(collection(db, "posts"), {
      username: "mrtsknc",
      displayName: "Mert Sakınç",
      verified: true,
      text: text,
      selectedImage: selectedImage,
      avatar: "/static/images/avatar/2.jpg",
    });

    console.log("Document written with ID: ", docPosts.id);

    setSelectedImage("");
    setText("");
  };

  return (
    <div className="tweetbox">
      <form onSubmit={handleSubmit}>
        <div className="tweetbox__input">
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="What's happening?"
          />
        </div>

        <div className="tweetbox__tweet">
          <div className="tweet__icons">
            <label style={{ cursor: "pointer" }} htmlFor="file-input">
              <ImageOutlinedIcon></ImageOutlinedIcon>
            </label>
            <input
              onChange={(event) => {
                setSelectedImage(event.target.files[0].name);
              }}
              id="file-input"
              type="file"
              style={{ display: "none" }}
            />
            <GifBoxOutlinedIcon></GifBoxOutlinedIcon>
            <BarChartOutlinedIcon className="bar"></BarChartOutlinedIcon>
            <SentimentSatisfiedAltOutlinedIcon></SentimentSatisfiedAltOutlinedIcon>
            <CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>
            <PlaceOutlinedIcon></PlaceOutlinedIcon>
          </div>
          <Button className="tweet__btn" variant="outlined">
            Tweetle
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
