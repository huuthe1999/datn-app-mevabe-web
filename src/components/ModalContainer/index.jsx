// libs
import CONSTANTS from "@/constants";
import { useRouter } from "@/hooks";
import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
// others
import "./style.scss";

const ModalContainer = ({ children, ...props }) => {
  const router = useRouter();
  const { background } = router.location.state || {};

  return (
    <div className="modal-container-outer">
      <Modal
        className="modal-container-wrapper"
        visible
        destroyOnClose
        closable={false}
        centered
        onCancel={() => router.push(background || CONSTANTS.ROUTERS.HOME)}
        footer={null}
        {...props}
      >
        {children}
      </Modal>
      <CloseOutlined />
    </div>
  );
};
export default ModalContainer;
