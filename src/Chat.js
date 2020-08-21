import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const randomString = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "");
    setSeed(randomString);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You tiped: ", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Dani Prol</span>
          Hey guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
        <p className={`chat__message ${true && "chat__receiver"}`}>
          {/* <span className="chat__name">Dani Prol</span> */}
          Hey what's up?
          <span className="chat__timestamp">3:53pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          {/* The main reason we are using a form here is because we want to have the ENTER functionality */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
