import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchOutlinedIcon className="search__icon"></SearchOutlinedIcon>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__container">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1260696013062406151" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mrtsknc"
          options={{ height: 350 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
