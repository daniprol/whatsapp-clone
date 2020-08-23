import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase-config";

function SidebarChat({ id, name }) {
  // const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  // const randomString = Math.random()
  //   .toString(36)
  //   .replace(/[^a-z]+/g, "");
  // setSeed(randomString);
  // }, []);
  //   console.log(randomString);
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
      // console.log(messages);
    }
  }, [id]);
  return (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  );
}

export default SidebarChat;
