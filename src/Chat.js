import React, { useState, useEffect } from "react";
import db from "./firebase-config";
import { useParams } from "react-router-dom";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  MessageSharp,
} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function Chat() {
  // const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [roomMessages, setRoomMessages] = useState([]);

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot(
          (snapshot) => setRoomName(snapshot.data().name)
          // usually we do snapshot.docs.map(doc=>...doc.data()) but here we already have a doc, so: snapshot.data().name
        );

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]); // IMPORTANT: we need to use this hook everytime we request a new chat room in the route. Otherwise it would only load the correct chat the first time!

  console.log(roomMessages);
  // useEffect(() => {
  // const randomString = Math.random()
  //   .toString(36)
  //   .replace(/[^a-z]+/g, "");
  // setSeed(randomString);
  // }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(user.displayName);
    console.log(roomId);
    console.log("You tiped: ", input);
    if (roomId) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        user: user.displayName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
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
        {/* {messages.map(message => (
          <ChatMessage user={message.user} message={message.message} timestamp={message.timestamp} key={message.timestamp}/>
        ))} */}
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
