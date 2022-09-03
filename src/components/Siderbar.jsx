import React, { useState } from "react";

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import Button from "@mui/material/Button";

import SidebarOption from "./SidebarOption";

const menuItems = [
  { icon: HomeIcon, title: "Home" },
  { icon: SearchIcon, title: "Explore" },
  { icon: NotificationsNoneOutlinedIcon, title: "Explore" },
  { icon: BookmarkBorderOutlinedIcon, title: "Bookmarks" },
  { icon: MailOutlineOutlinedIcon, title: "Messages" },
  { icon: ListAltOutlinedIcon, title: "Lists" },
  { icon: PersonOutlineOutlinedIcon, title: "Profile" },
  { icon: MoreHorizOutlinedIcon, title: "More" },
];

const Siderbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter__icon"></TwitterIcon>

      {menuItems.map((menuItem, index) => {
        return (
          <SidebarOption
            menuItem={menuItem}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          ></SidebarOption>
        );
      })}

      <Button className="sidebar__btn" variant="outlined">
        Tweetle
      </Button>
    </div>
  );
};

export default Siderbar;
