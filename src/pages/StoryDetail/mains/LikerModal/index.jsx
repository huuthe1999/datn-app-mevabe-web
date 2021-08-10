// libs
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { Avatar, List, Modal, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setShowLikerModal, getAllLiker } from "@/actions/StoryDetail";
// others
import "./style.scss";

const LikerModal = () => {
  const {
    status: { likeUsers = [], _id },
    showLikerModal,
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const [likerList, setLikerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showLikerModal) {
      setIsLoading(true);
      dispatch(
        getAllLiker({
          statusId: _id,
          cbFinally: () =>
            setTimeout(() => {
              setIsLoading(false);
            }, 300),
          cbSuccess: ({ userList: { likeUsers = [] } = {} }) => {
            setLikerList(likeUsers);
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLikerModal]);

  return (
    <Modal
      className="liker-modal-wrapper"
      visible={showLikerModal}
      footer={null}
      onCancel={() => dispatch(setShowLikerModal(false))}
      title={`${isLoading ? likeUsers.length : likerList.length} lượt thích`}
      width={400}
    >
      <List
        itemLayout="horizontal"
        className="liker-list"
        dataSource={
          isLoading ? likeUsers.map(() => ({ loading: true })) : likerList
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
