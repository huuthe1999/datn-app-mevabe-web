// libs
import React from "react";
import { Button, message } from "antd";
import {
  CommentOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useAuth, useRouter } from "@/hooks";
import { submitReaction } from "@/actions/StatusDetail";
import CONSTANTS from "@/constants";

const StoryInteract = () => {
  const {
    status: { likeUsers = [], _id, ...status },
  } = useSelector((state) => state.STATUS_DETAIL_REDUCER);
  const { user } = useAuth();
  const isLiked = likeUsers.includes(user?._id);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="story-interact-wrapper">
      <div className="story-interact-wrapper-inner">
        <Button
          type={isLiked ? "primary" : "link"}
          icon={<LikeOutlined />}
          onClick={() => {
            if (user) {
              dispatch(submitReaction(isLiked)(_id));
            } else {
              router.push({
                pathname: CONSTANTS.ROUTERS.LOGIN,
                state: {
                  returnUrl: `${CONSTANTS.ROUTERS.STORIES}/${_id}`,
                },
              });
            }
          }}
        >
          {isLiked ? "Bỏ thích" : "Thích"}
        </Button>
        <Button
          type="link"
          icon={<CommentOutlined />}
          onClick={() => {
            if (user) {
              const inputNode = document.getElementsByName("comment-input")[0];
              if (inputNode && inputNode.focus) inputNode.focus();
            } else {
              router.push({
                pathname: CONSTANTS.ROUTERS.LOGIN,
                state: {
                  returnUrl: `${CONSTANTS.ROUTERS.STORIES}/${_id}`,
                },
              });
            }
          }}
        >
          Bình luận
        </Button>
        <Button
          type="link"
          icon={<ShareAltOutlined />}
          onClick={() => {
            navigator.clipboard
              .writeText(status["url-web"])
              .then(() => message.success("Copy đường dẫn thành công"));
          }}
        >
          Chia sẻ
        </Button>
      </div>
    </div>
  );
};

export default StoryInteract;
