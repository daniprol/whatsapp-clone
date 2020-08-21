import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ id, name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    const randomString = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
    setSeed(randomString);
  }, []);
  //   console.log(randomString);
  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
