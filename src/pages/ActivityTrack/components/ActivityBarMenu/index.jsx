// libs
import CONSTANTS from "@/constants";
import { Menu, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import activityIcon from "@/assets/images/tracking/activity.svg";
import heightIcon from "@/assets/images/tracking/height.svg";
import { ReactComponent as WeightIcon } from "@/assets/images/tracking/weight.svg";
import { ReactComponent as MilkIcon } from "@/assets/images/tracking/milk.svg";
import { ReactComponent as VaccinIcon } from "@/assets/images/tracking/vaccin.svg";
// others
import "./style.scss";
import { useRouter } from "@/hooks";

const HeightIcon = () => (
  <img src={heightIcon} alt="height icon" style={{ marginRight: 10 }} />
);
const ActivityIcon = () => (
  <img src={activityIcon} alt="activity icon" style={{ marginRight: 10 }} />
);

const ActivityBarMenu = () => {
  const functionList = [
    {
      icon: <HeightIcon />,
      label: "Chiều cao",
      path: CONSTANTS.ROUTERS.TRACKING_HEIGHT,
    },
    {
      icon: <WeightIcon />,
      label: "Cân nặng",
      path: CONSTANTS.ROUTERS.TRACKING_WEIGHT,
    },
    {
      icon: <MilkIcon />,
      label: "Lượng sữa",
      path: CONSTANTS.ROUTERS.TRACKING_MILK,
    },
    {
      icon: <VaccinIcon />,
      label: "Lịch tiêm chủng",
      path: CONSTANTS.ROUTERS.TRACKING_VACCIN,
    },
    {
      icon: <ActivityIcon />,
      label: "Ghi chú\nhoạt động",
      path: CONSTANTS.ROUTERS.CALENDAR,
    },
  ];

  const { pathname } = useRouter();
  const [currentOpenKeys, setCurrentOpenKeys] = useState([]);

  useEffect(() => {
    setCurrentOpenKeys([pathname]);
  }, [pathname]);

  return (
    <div className="activity-bar-menu-wrapper">
      <Menu selectedKeys={currentOpenKeys}>
        {functionList.map(({ icon, path, label }) => (
          <Menu.Item icon={icon} key={path}>
            <Link to={path}>
              <Typography.Text strong>{label}</Typography.Text>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default ActivityBarMenu;
