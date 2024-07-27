import React, { FC, useEffect, useState } from "react";
import { Typography, Empty, Spin } from "antd";
import { useRequest } from "ahooks";
import { getMaterialByType } from "@/components/QNComponents";
import { getStatChartData } from "@/api";
import { useParams } from "react-router-dom";

const { Title } = Typography;

type ChartStatProps = {
  type: string;
  activeId: string;
};

const ChartStat: FC<ChartStatProps> = (props) => {
  const { type, activeId } = props;
  const { id } = useParams();
  const [chartData, setChartData] = useState([]);
  const { statComponent: StatComponent } = getMaterialByType(type as any) || {};
  const { loading, run } = useRequest(
    async () => {
      return await getStatChartData({ id, componentId: activeId });
    },
    {
      manual: true,
      onSuccess(res: any) {
        const { stat } = res.data;
        setChartData(stat);
      },
    },
  );
  useEffect(() => {
    if (StatComponent) {
      run();
    }
  }, [activeId]);
  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <Title level={3} style={{ margin: "5px 0" }}>
          统计
        </Title>
        {StatComponent ? (
          <StatComponent
            config={{
              data: chartData,
            }}
          />
        ) : (
          <Empty description="No Chart" />
        )}
      </Spin>
    </>
  );
};

export default ChartStat;
