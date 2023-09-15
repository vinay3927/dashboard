import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../../data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      <div className="logo">
        <span>Board.</span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
            <img src={item.icon} alt={item.heading} />
            <span>{item.heading}</span>
            </div>
          );
        })}
      </div>
      <div className="support">
        <span>Help</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Sidebar;
