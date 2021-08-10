// libs
import { uploadAvatar } from "@/actions/ChildManage";
import { useAuth } from "@/hooks";
import { CameraFilled, LoadingOutlined } from "@ant-design/icons";
import { Avatar, Upload, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const AvatarChange = ({ avatar, setAvatar }) => {
  const { userInfo, isLoading } = useSelector(
    (state) => state.PROFILE_INFO_REDUCER
  );
  const { user } = useAuth();

  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAvatar(userInfo?.avatar);
  }, [setAvatar, userInfo?.avatar]);

  return (
    <div className="avatar-change-wrapper">
      <div className="avatar-change-wrapper-inner">
        <Avatar
          size={150}
          icon={(isLoadingAvatar || isLoading) && <LoadingOutlined />}
          src={!(isLoadingAvatar || isLoading) && avatar}
        />
        {userInfo?._id === user?._id && (
          <Upload
            name="avatar"
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
                    setAvatar(urlImage);
                  },
                  cbFinally: () => setIsLoadingAvatar(false),
                })
              );
              return false;
            }}
          >
            <Button icon={<CameraFilled />} size="large" type="primary" />
          </Upload>
        )}
      </div>
    </div>
  );
};

export default AvatarChange;
