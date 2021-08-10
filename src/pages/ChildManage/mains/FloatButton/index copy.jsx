// libs
import React, { useState } from "react";
import { Avatar, Button, Spin, Upload } from "antd";
import { CameraFilled, LoadingOutlined } from "@ant-design/icons";
// others
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import CONSTANTS from "@/constants";
import {
  updateChildDetail,
  uploadAvatar,
  uploadCover,
} from "@/actions/ChildManage";

const {
  FIELD_NAMES: {
    CHILD_MANAGE: { NAME, NICKNAME, DISPLAY_AVATAR, DISPLAY_COVER },
  },
} = CONSTANTS;

const PageHeader = () => {
  const { childInfo } = useSelector((state) => state.CHILD_MANAGE_REDUCER);
  const name = childInfo[NAME] || "";
  const nickname = childInfo[NICKNAME] || "";
  const displayFullName = name + (nickname ? ` (${nickname})` : "");
  const dispatch = useDispatch();
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const [isLoadingCover, setIsLoadingCover] = useState(false);

  return (
    <div className="page-header-wrapper">
      <div className="child-cover">
        <Spin spinning={isLoadingCover}>
          <img
            className="img-cover"
            src={childInfo[DISPLAY_COVER]}
            alt={DISPLAY_COVER}
          />
        </Spin>
        <Upload
          name={DISPLAY_COVER}
          className="btn-upload"
          accept="image/*"
          showUploadList={false}
          beforeUpload={(file) => {
            setIsLoadingCover(true);
            dispatch(
              uploadCover({
                data: {
                  image: file,
                },
                cbSuccess: ({ urlImage }) => {
                  dispatch(
                    updateChildDetail({
                      [DISPLAY_COVER]: urlImage,
                    })
                  );
                },
                cbFinally: () => setIsLoadingCover(false),
              })
            );
            return false;
          }}
        >
          <Button icon={<CameraFilled />} type="primary">
            Cập nhật ảnh bìa
          </Button>
        </Upload>
      </div>
      <div className="bottom">
        <div className="child-avatar">
          <Avatar
            size={150}
            icon={isLoadingAvatar && <LoadingOutlined />}
            src={!isLoadingAvatar && childInfo[DISPLAY_AVATAR]}
          >
            {childInfo.displayFirstName}
          </Avatar>

          <Upload
            name={DISPLAY_AVATAR}
            className="btn-upload"
            accept="image/*"
            showUploadList={false}
            beforeUpload={(file) => {
              setIsLoadingAvatar(true);
              dispatch(
                uploadAvatar({
                  data: {
                    image: file,
                  },
                  cbSuccess: ({ urlImage }) => {
                    dispatch(
                      updateChildDetail({
                        [DISPLAY_AVATAR]: urlImage,
                      })
                    );
                  },
                  cbFinally: () => setIsLoadingAvatar(false),
                })
              );
              return false;
            }}
          >
            <Button icon={<CameraFilled />} size="large" type="primary" />
          </Upload>
        </div>
        <div className="name">{displayFullName}</div>
      </div>
    </div>
  );
};

export default PageHeader;
