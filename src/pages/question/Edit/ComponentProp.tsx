import React, { FC } from "react";
import { Result } from "antd";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { getMaterialByType } from "@/components/QNComponents";

const NoSelected: FC = () => {
  return <Result status="warning" title="未选中组件" />;
};

const ComponentProp: FC = () => {
  const { activeQnc } = useGetQncInfo();
  if (activeQnc == null) return <NoSelected />;
  const { type, props } = activeQnc;
  const curMaterial = getMaterialByType(type);
  if (curMaterial == null) return <NoSelected />;
  const { propComponent: PropComponent } = curMaterial;
  return <PropComponent {...props} />;
};

export default ComponentProp;
