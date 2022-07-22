import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebarthread.css";
function SidebarThread() {
  return (
    <div className="sidebarThread">
      <Avatar />
      <div className="sidebarThread__details">
        <h3>Thread Name</h3>
        <p>info</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarThread;
