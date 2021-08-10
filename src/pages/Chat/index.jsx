// libs
import React from "react";
import FetchConversation from "./ghosts/FetchConversation";
import ChatDetail from "./mains/ChatDetail";
import Sidebar from "./mains/Sidebar";
// others
import "./style.scss";

const Chat = () => (
  <div className="chat-wrapper">
    <Sidebar />
    <ChatDetail />
    <FetchConversation />
  </div>
);

export default Chat;
