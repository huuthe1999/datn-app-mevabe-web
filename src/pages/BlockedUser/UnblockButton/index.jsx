// libs
import { unblockUser } from "@/actions/BlockedUser";
import { Button, Popconfirm } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const UnblockButton = ({ user, setShouldRefresh }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Popconfirm
      title={`Bỏ chặn ${user?.name}?`}
      onConfirm={() => {
        setIsLoading(true);
        dispatch(
          unblockUser({
            idBlockUserList: [user._id],
            cbSuccess: () => setShouldRefresh(new Date().getTime()),
            cbFinally: () => setIsLoading(false),
          })
        );
      }}
    >
      <Button type="primary" loading={isLoading} danger>
        Bỏ chặn
      </Button>
    </Popconfirm>
  );
};

export default UnblockButton;
