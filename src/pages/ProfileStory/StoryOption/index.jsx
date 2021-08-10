import {
  setShowStoryModal,
  updateModalData,
  removeStory,
} from "@/actions/ProfileStory";
import { deleteStory } from "@/actions/Stories";
import { DashOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Modal, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const StoryOption = ({ _id }) => {
  const dispatch = useDispatch();

  return (
    <Dropdown
      placement="bottomRight"
      className="story-option-wrapper"
      trigger={["click"]}
      arrow
      overlay={
        <Menu>
          <Menu.Item
            onClick={() => {
              dispatch(setShowStoryModal(true));
              dispatch(updateModalData({ _id }));
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
                        dispatch(removeStory(_id));
                      },
                    })
                  ),
              });
            }}
          >
            <Typography.Text type="danger">Xóa khoảnh khắc</Typography.Text>
          </Menu.Item>
        </Menu>
      }
    >
      <Button type="link" icon={<DashOutlined />} />
    </Dropdown>
  );
};

export default StoryOption;
