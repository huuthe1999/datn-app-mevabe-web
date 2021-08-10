// libs
import { useAuth } from "@/hooks";
import { Empty } from "antd";
import { Formik } from "formik";
import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import ChatHeader from "../../components/ChatHeader";
import ChatInput from "../../components/ChatInput";
import LoadMore from "../../components/LoadMore";
import MessageItem from "../../components/MessageItem";
import ListenMessage from "../../ghosts/ListenMessage";
// others
import "./style.scss";

const ChatDetail = () => {
  const { messages, currentUser, shouldScrollBottom, scrollAt } = useSelector(
    (state) => state.CHAT_REDUCER
  );
  const { user } = useAuth();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (shouldScrollBottom && scrollAt) {
      if (messageEndRef.current) {
        if (currentUser?._id === scrollAt) {
          messageEndRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldScrollBottom]);

  return (
    <div className="chat-detail-wrapper">
      {currentUser?._id ? (
        <>
          <ChatHeader />
          <div className="message-list">
            <LoadMore />
            {(messages[currentUser?._id] || []).map((message) => (
              <MessageItem
                key={message?._id}
                content={message?.text}
                isYou={message?.sender === user?._id}
                isFail={message?.isFail}
                media={message?.media}
              />
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <Formik initialValues={{ content: "", fileList: [] }}>
            <ChatInput />
          </Formik>
        </>
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          description={<span>Không tìm thấy cuộc trò chuyện</span>}
        />
      )}
      <ListenMessage />
    </div>
  );
};

export default ChatDetail;
