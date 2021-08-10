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
import { useDispatch } from "react-redux";
import { submitReaction } from "@/actions/Stories";
import { useAuth, useRouter } from "@/hooks";
import { Link } from "react-router-dom";
import CONSTANTS from "@/constants";

const PostInteract = ({ _id, likeUsers = [], url, hasImage }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isLiked = likeUsers.includes(user?._id);
  const router = useRouter();

  return (
    <div className="post-interact-wrapper">
      <div className="post-interact-wrapper-inner">
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
        <Link
          to={{
            pathname: `${CONSTANTS.ROUTERS.STORIES}/${_id}`,
            state: { background: router.location, hasImage },
          }}
        >
          <Button type="link" icon={<CommentOutlined />}>
            Bình luận
          </Button>
        </Link>
        <Button
          type="link"
          icon={<ShareAltOutlined />}
          onClick={() => {
            navigator.clipboard
              .writeText(url)
              .then(() => message.success("Copy đường dẫn thành công"));
          }}
        >
          Chia sẻ
        </Button>
      </div>
    </div>
  );
};

export default PostInteract;
