import { Collapse, List, Skeleton, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import DetailVaccinShot from "../../components/DetailVaccinShot";
import DiseaseDesc from "../../components/DiseaseDesc";
// others
import "./style.scss";

const VaccinationList = () => {
  const { vaccinations, isLoading } = useSelector(
    (state) => state.TRACKING_VACCIN_REDUCER
  );

  return (
    <div className="vaccination-list-wrapper">
      <List
        itemLayout="horizontal"
        dataSource={vaccinations}
        loading={isLoading}
        size="small"
        pagination={{ pageSize: 5 }}
        renderItem={({
          diseaseName,
          diseaseDescription,
          content,
          sideEffects,
          _id,
          ...data
        }) => (
          <List.Item>
            <Skeleton paragraph={{ rows: 3 }} active loading={isLoading}>
              <List.Item.Meta
                title={
                  <Collapse ghost>
                    <Collapse.Panel
                      header={
                        <Typography.Title level={4}>
                          {diseaseName}
                        </Typography.Title>
                      }
                    >
                      <DiseaseDesc
                        {...{ diseaseDescription, content, sideEffects }}
                      />
                    </Collapse.Panel>
                  </Collapse>
                }
                description={<DetailVaccinShot {...data} />}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};
export default VaccinationList;
