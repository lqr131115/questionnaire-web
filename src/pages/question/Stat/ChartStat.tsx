import React, { FC, useEffect, useState } from "react";
import { Typography, Empty, Spin } from "antd";
import { useRequest } from "ahooks";
import { Line } from "@ant-design/charts";
import type { LineConfig } from "@ant-design/charts";
import { choiceQncMaterialGroupType } from "@/components/QNComponents";
import { getStatChartData } from "@/api";
import { useParams } from "react-router-dom";

const { Title } = Typography;

type ChartStatProps = {
  type: string;
  activeId: string;
};

const LineChart: FC<{ data: any[] }> = (props) => {
  const { data } = props;

  const config: LineConfig = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
  };
  return <Line {...config} />;
};

const ChartStat: FC<ChartStatProps> = (props) => {
  const { type, activeId } = props;
  const { id } = useParams();
  const isShow = choiceQncMaterialGroupType.includes(type);
  const [chartData, setChartData] = useState([]);
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
    if (isShow) {
      run();
    }
  }, [activeId]);
  return (
    <>
      <Spin spinning={loading} style={{ marginTop: 20 }}>
        <Title level={3} style={{ margin: "5px 0" }}>
          统计
        </Title>
        {isShow ? (
          <LineChart data={chartData} />
        ) : (
          <Empty description="No Chart" style={{ marginTop: 60 }} />
        )}
      </Spin>
    </>
  );
};

export default ChartStat;
