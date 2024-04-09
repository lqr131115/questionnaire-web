import React, { FC } from "react";
import { Result } from "antd";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { getMaterialByType } from "@/components/QNComponents";
import { useAppDispatch } from "@/store/hooks";
import { changeQncProps } from "@/store/counter/qnc";

const NoSelected: FC = () => {
  return <Result status="warning" title="未选中组件" />;
};
const ComponentProp: FC = () => {
  const dispatch = useAppDispatch();
  const { activeQnc } = useGetQncInfo();
  if (activeQnc == null) return <NoSelected />;
  const { type, props, qn_id, hidden, locked } = activeQnc;
  const curMaterial = getMaterialByType(type);
  if (curMaterial == null) return <NoSelected />;
  const { propComponent: PropComponent } = curMaterial;

  const onValuesChange = (_: any, allValues: any) => {
    dispatch(changeQncProps({ qn_id, newProps: allValues }));
  };
  return (
    <PropComponent
      {...props}
      onValuesChange={onValuesChange}
      disabled={locked || hidden}
    />
  );
};

export default ComponentProp;
