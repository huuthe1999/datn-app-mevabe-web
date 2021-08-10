// libs
import { Select } from "antd";
import { useFormikContext } from "formik";
import React from "react";
import { useSelector } from "react-redux";

const FilterStory = () => {
  const { childs, isLoading } = useSelector(
    (state) => state.PROFILE_INFO_REDUCER
  );

  const {
    values: { filterChild },
    setFieldValue,
  } = useFormikContext();

  return (
    <div className="filter-story-wrapper">
      <span>Xem khoảnh khắc của: </span>
      <Select
        value={filterChild}
        onChange={(v) => setFieldValue("filterChild", v)}
        loading={isLoading}
        style={{ width: 200 }}
      >
        <Select.Option key="all" value="all">
          Tất cả các bé
        </Select.Option>
        {childs.map(({ name, nickname, _id }) => (
          <Select.Option key={_id} value={_id}>
            {name} ({nickname})
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterStory;
