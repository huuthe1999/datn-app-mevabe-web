// libs
import { fetchBlockedUsers } from "@/actions/BlockedUser";
import CONSTANTS from "@/constants";
import { Avatar, List, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// others
import "./style.scss";
import UnblockButton from "./UnblockButton";

const BlockedUser = () => {
  const dispatch = useDispatch();

  const { blockedUsers, isLoading } = useSelector(
    (state) => state.BLOCKED_USER_REDUCER
  );

  const [shouldRefresh, setShouldRefresh] = useState(0);

  useEffect(() => {
    dispatch(fetchBlockedUsers());
  }, [dispatch, shouldRefresh]);

  return (
    <div className="blocked-user-wrapper">
      <Typography.Title level={3}>
        Danh sách người dùng đã chặn
      </Typography.Title>
      <List
        className="demo-loadmore-list"
        loading={isLoading}
        itemLayout="horizontal"
        dataSource={blockedUsers}
        pagination={{
          pageSize: 8,
          showTotal: (total) => `${total} người dùng bị chặn`,
        }}
        renderItem={(user) => (
          <List.Item
            actions={[
              <UnblockButton user={user} setShouldRefresh={setShouldRefresh} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={user?.avatar} />}
              title={
                <Link
                  to={`${CONSTANTS.ROUTERS.PROFILE_INFO}?userId=${user._id}`}
                  target="_blank"
                >
                  {user.name}
                </Link>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlockedUser;
