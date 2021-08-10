// libs
import { deleteStory, hideStory } from "@/actions/Stories";
import CONSTANTS from "@/constants";
import { useAuth, useRouter } from "@/hooks";
import { DashOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Modal, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoryModal from "../StoryModal";
// others
import "./style.scss";

const StoryOption = () => {
  const {
    status: { user = {}, _id },
  } = useSelector((state) => state.STATUS_DETAIL_REDUCER);
  const { user: currentUser } = useAuth();
  const isOwnStory = currentUser?._id === user?._id;
  const router = useRouter();

  const dispatch = useDispatch();

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleHideStory = ({ idStatusHidden, idOwnerHidden }) => {
    dispatch(
      hideStory({
        idStatusHidden,
        idOwnerHidden,
        cbSuccess: () =>
          router.push({
            pathname: CONSTANTS.ROUTERS.STORIES,
          }),
      })
    );
  };

  return currentUser ? (
    <>
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
                    setShowUpdateModal(true);
                  }}
                >
                  Chỉnh sửa khoảnh khắc
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  onClick={() => {
                    Modal.confirm({
                      title: "Xóa khoảnh khăc này?",
                      onOk: () =>
                        dispatch(
                          deleteStory({
                            _id,
                            cbSuccess: () => {
                              message.success("Xóa khoảnh khắc thành công");
                              router.push(CONSTANTS.ROUTERS.STORIES);
                            },
                          })
                        ),
                    });
                  }}
                >
                  <Typography.Text type="danger">
                    Xóa khoảnh khắc
                  </Typography.Text>
                </Menu.Item>
              </>
            )}
            {!isOwnStory && (
              <>
                <Menu.Item
                  onClick={() => handleHideStory({ idStatusHidden: _id })}
                >
                  Ẩn khoảnh khắc này
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
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
      <StoryModal {...{ showUpdateModal, setShowUpdateModal }} />
    </>
  ) : null;
};

export default StoryOption;
