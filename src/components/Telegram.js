import React from "react";
import Sidebar from "./Sidebar";
import "./telegram.css";
import Thread from "./Thread";
function Telegram() {
  return (
    <div className="telegram">
      <Sidebar />
      <Thread />
    </div>
  );
}

export default Telegram;
