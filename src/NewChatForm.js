import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./SidebarChat.css";
import db from "./firebase-config";

export default function NewChatForm() {
  const [open, setOpen] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setNewChatName("");
    setEmptyInput("");
  };

  const newChatModal = () => {
    setOpen(true);
  };

  const addNewChat = () => {
    if (newChatName !== "") {
      db.collection("rooms").add({
        name: newChatName,
      });
    }
    handleClose();
  };
  return (
    <div>
      <div className="sidebarChat" onClick={newChatModal}>
        <h2>Add new chat</h2>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Chat</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Enter name of the chat room</DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="chatRoom"
            label="Chat Room"
            type="text"
            value={newChatName}
            onChange={(e) => {
              setNewChatName(e.target.value);
              if (e.target.value === "") {
                setEmptyInput(true);
              } else {
                setEmptyInput(false);
              }
            }}
            // error={newChatName === ""}
            error={emptyInput}
            helperText={emptyInput ? "Room must have a name" : " "}
            fullWidth
            // onBlur={(e) => {
            //   newChatName === "" ? setEmptyInput(true) : setEmptyInput(false);
            // }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={newChatName === ""}
            onClick={addNewChat}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
