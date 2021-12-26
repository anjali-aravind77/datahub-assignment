import React from "react";
import "./TopBar.css";


export default function Topbar() {
  return (
    <div className="topbar-container">   
        <div className="topRight">
          <div className="topbarIconContainer">
          <i class="bi bi-bell"></i>
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
          <i class="bi bi-chat-text"></i>
            <span className="topIconBadge"></span>
          </div>
          
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      
    </div>
  );
}