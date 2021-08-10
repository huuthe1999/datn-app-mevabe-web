// libs
import { fetchLikers } from "@/actions/ProfileStory";
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { List, Modal, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const LikerModal = ({ showLikerModal, setShowLikerModal, _id }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [likers, setLikers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showLikerModal) {
      setIsLoading(true);
      dispatch(
        fetchLikers({
          statusId: _id,
          cbSuccess: ({ userList: { likeUsers = [] } }) => {
            setLikers(likeUsers);
          },
          cbFinally: () => setIsLoading(false),
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
      onCancel={() => setShowLikerModal(false)}
      title={`${likers.length} lượt thích`}
      width={400}
    >
      <List
        itemLayout="horizontal"
        className="liker-list"
        dataSource={likers}
        loading={isLoading}
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
