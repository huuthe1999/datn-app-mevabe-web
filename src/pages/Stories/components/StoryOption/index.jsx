// libs
import {
  deleteStory,
  fetchStoryDetail,
  hideStory,
  setShowStoriesModal,
} from "@/actions/Stories";
import CONSTANTS from "@/constants";
import { useAuth, useRouter } from "@/hooks";
import { DashOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Modal, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const { DETELE_STORY } = CONSTANTS.ACTION_TYPES.STORIES_ACTIONS;

const StoryOption = ({ user, _id }) => {
  const { user: currentUser } = useAuth();
  const isOwnStory = currentUser?._id === user?._id;
  const router = useRouter();

  const dispatch = useDispatch();

  const handleHideStory = ({ idStatusHidden, idOwnerHidden }) => {
    dispatch(
      hideStory({
        idStatusHidden,
        idOwnerHidden,
        cbSuccess: () =>
          router.push({
            pathname: CONSTANTS.ROUTERS.STORIES,
            state: {
              ...(router.location.state || {}),
              shouldRefreshData: new Date().getTime(),
            },
          }),
      })
    );
  };

  return currentUser ? (
    <Dropdown
      placement="bottomRight"
      className="story-option-wrapper"
      trigger={["click"]}
      arrow
      overlay={
        <Menu>
          {isOwnStory && (
            <>
              <Menu.Item
                onClick={() => {
                  dispatch(setShowStoriesModal({ showModal: true }));
                  dispatch(fetchStoryDetail({ _id }));
                }}
                key="update"
              >
                Chỉnh sửa khoảnh khắc
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                key="delete"
                onClick={() => {
                  Modal.confirm({
                    title: "Xóa khoảnh khăc này?",
                    onOk: () =>
                      dispatch(
                        deleteStory({
                          _id,
                          cbSuccess: () => {
                            message.success("Xóa khoảnh khắc thành công");
                            dispatch({
                              type: DETELE_STORY,
                              payload: _id,
                            });
                          },
                        })
                      ),
                  });
                }}
              >
                <Typography.Text type="danger">Xóa khoảnh khắc</Typography.Text>
              </Menu.Item>
            </>
          )}
          {!isOwnStory && (
            <>
              <Menu.Item
                key="hide"
                onClick={() => handleHideStory({ idStatusHidden: _id })}
              >
                Ẩn khoảnh khắc này
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item
                key="block"
                onClick={() => handleHideStory({ idOwnerHidden: user?._id })}
              >
                Ẩn tất cả khoảnh khắc của <strong>{user?.name}</strong>
              </Menu.Item>
            </>
          )}
        </Menu>
      }
    >
      <Button type="link" icon={<DashOutlined />} />
    </Dropdown>
  ) : null;
};

export default StoryOption;
