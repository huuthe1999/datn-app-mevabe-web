// libs
import CONSTANTS from "@/constants";
import { Avatar, Comment, Skeleton, Typography } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import CommentImage from "../CommentImage";
import ReplyButton from "../ReplyButton";
import ShowReplyButton from "../ShowReplyButton";
// others
import "./style.scss";

const SingleComment = ({
  comment,
  showLoading,
  children,
  isLower = false,
  handleShowSubComments,
  handleHideSubComment,
  showReply,
}) => (
  <div className="single-comment-wrapper">
    <Skeleton avatar title active loading={showLoading}>
      <Comment
        actions={
          !isLower && [
            <ReplyButton comment={comment} key="reply" />,
            <ShowReplyButton
              key="show"
              handleShowSubComments={handleShowSubComments}
              handleHideSubComment={handleHideSubComment}
              showReply={showReply}
              subComments={comment?.subComments || []}
            />,
          ]
        }
        datetime={moment(new Date(comment?.createAt)).locale("vi").fromNow()}
        author={
          <Link
            to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${comment?.user?._id}`}
          >
            {comment?.user?.name}
          </Link>
        }
        avatar={<Avatar src={comment?.user?.avatar} />}
        content={
          <div>
            <div>
              <Typography.Paragraph
                ellipsis={{ rows: 2, expandable: true, symbol: "Xem thêm" }}
              >
                {comment?.content}
              </Typography.Paragraph>
            </div>
            <CommentImage images={comment?.images} />
          </div>
        }
      >
        {children}
      </Comment>
    </Skeleton>
  </div>
);

export default SingleComment;
