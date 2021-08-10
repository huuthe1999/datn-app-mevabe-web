// libs
import { setShowLikerModal } from "@/actions/Stories";
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { List, Modal, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const LikerModal = () => {
  const { showLikerModal, likers, isLoadingLiker, likerStory, storyList } =
    useSelector((state) => state.STORIES_REDUCER);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const defaultLikers = storyList[likerStory]?.likeUsers || [];

  return (
    <Modal
      className="liker-modal-wrapper"
      visible={showLikerModal}
      footer={null}
      onCancel={() => dispatch(setShowLikerModal(false))}
      title={`${
        isLoadingLiker ? defaultLikers.length : likers.length
      } lượt thích`}
      width={400}
    >
      <List
        itemLayout="horizontal"
        className="liker-list"
        dataSource={
          isLoadingLiker ? defaultLikers.map(() => ({ loading: true })) : likers
        }
        renderItem={(likedUser) => (
          <List.Item>
            <Skeleton
              avatar={{ shape: "circle" }}
              loading={likedUser.loading}
              active
              title={{ width: "50%" }}
              paragraph={false}
            >
              <List.Item.Meta
                avatar={
                  <Link
                    to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${likedUser._id}`}
                  >
                    <Avatar src={likedUser.avatar} size={40} />
                  </Link>
                }
                title={
                  <Link
                    to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${likedUser._id}`}
                  >
                    {likedUser.name}{" "}
                    {user?._id === likedUser._id ? "(Bạn)" : ""}
                  </Link>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default LikerModal;
