// libs
import { useAuth } from "@/hooks";
import useSocket from "@/hooks/useSocket";
import { FileImageOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Input, Upload } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// others
import "./style.scss";
import { Field, useFormikContext } from "formik";
import {
  triggerScrollBotttom,
  updateSingleUserSingleMessage,
} from "@/actions/Chat";
import FilePreview from "../FilePreview";
import { uploadImages } from "@/actions/Stories";

const ChatInput = () => {
  const { socket } = useSocket();
  const { user } = useAuth();
  const { currentUser } = useSelector((state) => state.CHAT_REDUCER);

  const [isLoading, setIsLoading] = useState(false);

  const {
    setFieldValue,
    values: { content, fileList },
    resetForm,
  } = useFormikContext();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e && (e.shiftKey || e.ctrlKey || e.altKey)) return;
    if (content.trim() || fileList.length) {
      const handleSubmitMessage = (arrImg = []) => {
        const message = {
          message_id: uuidv4(),
          sender: user?._id,
          recipient: currentUser?._id,
          text: content.trim(),
          media: arrImg,
          time: new Date().getTime(),
        };
        socket.emit("addMessage", message);

        dispatch(
          updateSingleUserSingleMessage({
            targetUser: currentUser?._id,
            message: { ...message, _id: message.message_id },
          })
        );

        setTimeout(() => {
          resetForm();
          dispatch(triggerScrollBotttom(currentUser?._id));
        }, 200);
      };

      if (fileList.length) {
        setIsLoading(true);
        dispatch(
          uploadImages({
            data: {
              images: fileList,
            },
            cbSuccess: (arrImg) => {
              handleSubmitMessage(arrImg);
            },
            cbFinally: () => setIsLoading(false),
          })
        );
      } else {
        handleSubmitMessage();
      }
    }
  };

  return currentUser?._id ? (
    <div className="chat-input-wrapper">
      <FilePreview />
      <div className="chat-input-wrapper-inner">
        <Field name="content">
          {({ field: { name, value } }) => (
            <Input.TextArea
              value={value}
              onChange={(e) => setFieldValue(name, e.target.value)}
              name="chat-input"
              onPressEnter={handleSubmit}
            />
          )}
        </Field>
        <Field name="fileList">
          {({ field: { name, value } }) => (
            <Upload
              multiple
              showUploadList={false}
              fileList={value}
              accept="image/*"
              beforeUpload={(file, fileList) => {
                setFieldValue(name, fileList);
                return false;
              }}
            >
              <Button icon={<FileImageOutlined />} ghost />
            </Upload>
          )}
        </Field>
        <Button
          icon={<SendOutlined />}
          loading={isLoading}
          ghost
          onClick={handleSubmit}
        />
      </div>
    </div>
  ) : null;
};

export default ChatInput;
