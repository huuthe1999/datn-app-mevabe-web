// libs
import { fetchHandbookList } from "@/actions/Handbook";
import { useRouter } from "@/hooks";
import { Pagination } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const HandbookPagination = () => {
  const { totalRecords, currentPage, guides } = useSelector(
    (state) => state.HANDBOOK_REDUCER
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const category = router.query.get("category");

  return (
    <div className="handbook-pagination-wrapper">
      {guides.length ? (
        <Pagination
          current={currentPage?.page}
          pageSize={currentPage?.limit || 6}
          total={totalRecords}
          onChange={(page, pageSize) => {
            dispatch(
              fetchHandbookList({
                data: {
                  category,
                  page,
                  limit: pageSize,
                },
              })
            );
          }}
        />
      ) : null}
    </div>
  );
};

export default HandbookPagination;
