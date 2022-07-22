import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./thread.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import TimerOutlinedIcon from "@material-ui/icons/TimerOutlined";
import db from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectThreadId, selectThreadName } from "../features/threadSlice";
import { selectUser } from "../features/userSlice";
import Message from "./Message";
function Thread() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const threadId = useSelector(selectThreadId);
  const threadName = useSelector(selectThreadName);
  const user = useSelector(selectUser);
  useEffect(() => {
    if (threadId) {
      db.collection("threads")
        .doc(threadId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        );
    }
  }, [threadId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("threads").doc(threadId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName
    });
    setInput("");
  };

  // useEffect(() => {
  //   if (input !== "") {
  //     setNotEmpty(true);
  //   } else {
  //     setNotEmpty(false);
  //   }
  // }, [input]);
  return (
    <div className="thread">
      <div className="thread__header">
        <div className="thread__header__contents">
          <Avatar />
          <div className="thread__header__contents__info">
            <h4>Threadname</h4>
            <h5>lastseen</h5>
          </div>
        </div>
        <IconButton>
          <MoreHorizIcon className="thread__header__details" />
        </IconButton>
      </div>
      <div className="thread__messages">
        {messages.map(({ id, data }) => (
          <Message key={id} data={data} />
        ))}{" "}
      </div>
      <div className="thread__input">
        <form>
          <input
            type="text"
            placeholder="Write a Message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton>
            <TimerOutlinedIcon />
          </IconButton>
          <IconButton onClick={sendMessage}>
            <SendRoundedIcon />
          </IconButton>
          <IconButton>
            <MicNoneOutlinedIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Thread;
