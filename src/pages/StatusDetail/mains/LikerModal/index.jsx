// libs
import { showLikerModal, fetchLikerUsers } from "@/actions/StatusDetail";
import CONSTANTS from "@/constants";
import { useAuth } from "@/hooks";
import { List, Modal, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// others
import "./style.scss";

const LikerModal = () => {
  const { showLikerModal: isShowLikerModal, status: { _id, likeUsers } = {} } =
    useSelector((state) => state.STATUS_DETAIL_REDUCER);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [likers, setLikers] = useState([]);

  useEffect(() => {
    if (!_id) return;
    if (isShowLikerModal) {
      setIsLoading(true);
      dispatch(
        fetchLikerUsers({
          statusId: _id,
          cbSuccess: ({ userList: { likeUsers = [] } = {} }) => {
            setLikers(likeUsers);
            setIsLoading(false);
          },
        })
      );
    } else {
      setLikers([]);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowLikerModal]);

  return (
    <Modal
      className="liker-modal-wrapper"
      visible={isShowLikerModal}
      footer={null}
      onCancel={() => dispatch(showLikerModal(false))}
      title={`${isLoading ? likeUsers.length : likers.length} lượt thích`}
      width={400}
      centered
    >
      <List
        itemLayout="horizontal"
        className="liker-list"
        dataSource={
          isLoading ? likeUsers.map(() => ({ loading: true })) : likers
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
