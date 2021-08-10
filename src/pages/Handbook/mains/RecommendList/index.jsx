// libs
import { fetchSuggestion } from "@/actions/Handbook";
import { useRouter } from "@/hooks";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GuideSkeleton from "../../components/GuideSkeleton";
import SingleBlog from "../SingleBlog";
// others
import "./style.scss";

const RecommendList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const category = router.query.get("category");

  useEffect(() => {
    if (!category) {
      setIsLoading(true);
      dispatch(
        fetchSuggestion({
          cbSuccess: ({ guideList }) =>
            setList(
              guideList.reduce(
                (previous, { guides }) => [...previous, ...guides],
                []
              )
            ),
          cbFinally: () =>
            setTimeout(() => {
              setIsLoading(false);
            }, 300),
        })
      );
    }
  }, [dispatch, category]);

  return category ? null : (
    <div className="recommend-list-wrapper">
      <h1>Có thể bạn sẽ thích</h1>
      {isLoading ? (
        <div className="loading-list">
          {[...Array(3).keys()].map((index) => (
            <GuideSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Carousel
          slidesToShow={3}
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
          dots={false}
          className="recommend-list-wrapper-carousel"
        >
          {list.map((guide) => (
            <SingleBlog key={guide._id} blog={guide} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default RecommendList;
