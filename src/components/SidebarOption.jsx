import React from "react";

const SidebarOption = ({
  menuItem,
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <div
      onClick={() => setSelectedIndex(index)}
      className={`sidebar__option ${selectedIndex === index ? "active" : ""} `}
    >
      <menuItem.icon className="sidebar__option__icon"></menuItem.icon>
      <h2 className="sidebar__option__text">{menuItem.title}</h2>
    </div>
  );
};

export default SidebarOption;
