// libs
import React, { useState } from "react";
import {
  FileImageOutlined,
  LoadingOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Upload } from "antd";
// hooks
import { useAuth } from "@/hooks";
// others
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  refreshComments,
  setBaseComment,
  submitHighLevelComment,
  submitLowLevelComment,
  triggerReloadSubComments,
  uploadImages,
} from "@/actions/StoryDetail";
import BaseComment from "../../components/BaseComment";
import ImagePreview from "../../components/ImagePreview";

const CommentInput = () => {
  const { user } = useAuth();
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const {
    status: { _id },
    baseComment,
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);

  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleSubmit = (e) => {
    if (e && (e.shiftKey || e.ctrlKey || e.altKey)) return;
    if (content.trim()) {
      setIsSubmit(true);

      const handleSubmitComment = (arrImg) => {
        const commonData = {
          statusId: _id,
          content: content.trim(),
          arrImg,
          cbFinally: () => setIsSubmit(false),
          cbSuccess: () => {
            dispatch(refreshComments());
            setContent("");
            setFileList([]);
          },
        };
        if (Object.keys(baseComment).length)
          dispatch(
            submitLowLevelComment({
              ...commonData,
              commentId: baseComment._id,
              cbSuccess: () => {
                dispatch(refreshComments());
                dispatch(triggerReloadSubComments(baseComment._id));
                dispatch(setBaseComment({}));
                setContent("");
                setFileList([]);
              },
            })
          );
        else dispatch(submitHighLevelComment(commonData));
      };

      if (!fileList.length) {
        handleSubmitComment([]);
      } else {
        dispatch(
          uploadImages({
            data: {
              images: fileList,
            },
            cbSuccess: (arrImg) => {
              handleSubmitComment(arrImg);
            },
            cbError: () => setIsSubmit(false),
          })
        );
      }
    }
  };

  return user ? (
    <div className="comment-input-wrapper">
      <BaseComment />
      {fileList.map((file) => (
        <ImagePreview
          file={file}
          key={file.uid}
          onRemove={() =>
            setFileList(fileList.filter(({ uid }) => file.uid !== uid))
          }
        />
      ))}
      <div className="comment-input-wrapper-inner">
        <Avatar icon={<UserOutlined />} src={user?.avatar} size={32} />
        <Input.TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="comment-input-detail"
          onPressEnter={handleSubmit}
        />

        <Upload
          multiple
          showUploadList={false}
          fileList={fileList}
          accept="image/*"
          beforeUpload={(file, fileList) => {
            setFileList(fileList);
            return false;
          }}
        >
          <Button icon={<FileImageOutlined />} ghost />
        </Upload>
        <Button
          icon={isSubmit ? <LoadingOutlined /> : <SendOutlined />}
          ghost
          onClick={() => {
            if (!isSubmit) handleSubmit();
          }}
        />
      </div>
    </div>
  ) : null;
};

export default CommentInput;
