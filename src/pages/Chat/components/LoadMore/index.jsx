// libs
import {
  fetchMessages,
  updatePaginationData,
  updateSingleUserMessages,
} from "@/actions/Chat";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const LoadMore = ({ scrollToBottom }) => {
  const { currentUser, pagination } = useSelector(
    (state) => state.CHAT_REDUCER
  );

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { next = 1 } = pagination[currentUser?._id] || {};

  const handleLoadMore = ({ cbSuccess }) => {
    if (next === null) return;

    setIsLoading(true);
    dispatch(
      fetchMessages({
        userId: currentUser?._id,
        data: { page: next, limit: 20 },
        cbSuccess: ({ messages, result }) => {
          dispatch(
            updateSingleUserMessages({ targetUser: currentUser?._id, messages })
          );
          dispatch(
            updatePaginationData({
              [currentUser?._id]: { next: result < 20 ? null : next + 1 },
            })
          );

          if (cbSuccess) {
            cbSuccess();
          }
        },
        cbFinally: () => setIsLoading(false),
      })
    );
  };

  useEffect(() => {
    if (currentUser?._id && next === 1) {
      setTimeout(() => {
        handleLoadMore({
          cbSuccess: () => {
            setTimeout(scrollToBottom, 200);
          },
        });
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next, currentUser?._id]);

  return next !== null ? (
    <div className="load-more-wrapper">
      <Button type="link" onClick={handleLoadMore} loading={isLoading}>
        Tải thêm
      </Button>
    </div>
  ) : null;
};

export default LoadMore;
