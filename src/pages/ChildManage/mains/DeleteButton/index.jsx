// libs
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
// others
import { deleteChild } from "@/actions/ChildManage";
import "./style.scss";
import { useChild, useRouter } from "@/hooks";
import CONSTANTS from "@/constants";

const DeleteButton = () => {
  const dispatch = useDispatch();
  const { refreshChildren, currentChild } = useChild();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    childInfo: { _id },
  } = useSelector((state) => state.CHILD_MANAGE_REDUCER);

  return (
    <Button
      icon={<DeleteOutlined />}
      className="delete-button-wrapper"
      type="primary"
      size="large"
      danger
      loading={isLoading}
      style={{ visibility: _id ? "visible" : "hidden" }}
      onClick={() => {
        Modal.confirm({
          title: "Bạn có thực sự muốn xóa bé?",
          onOk: () => {
            setIsLoading(true);
            return dispatch(
              deleteChild({
                childId: currentChild,
                cbFinally: () => setIsLoading(false),
                cbSuccess: () => {
                  refreshChildren();
                  router.push(CONSTANTS.ROUTERS.PROFILE_CHILD);
                },
              })
            );
          },
        });
      }}
    >
      Xóa bé
    </Button>
  );
};

export default DeleteButton;
