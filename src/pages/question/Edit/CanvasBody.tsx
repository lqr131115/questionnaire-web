import React, { FC } from "react";
import { Spin } from "antd";
import styles from "./canvasbody.module.scss";
import { useGetQncList } from "../../../hooks/useGetQncList";
import { getMaterialByType } from "../../../components/QNComponents";

type CanvasBodyProps = {
  loading: boolean;
};

const CanvasBody: FC<CanvasBodyProps> = (props) => {
  const { loading } = props;
  const componentList = useGetQncList();
  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <div className={styles.container}>
        {componentList.map((m) => {
          return (
            <div className={styles.wrapper} key={m.qn_id}>
              <div className={styles.disabled}>
                {getMaterialByType(m.type)?.component(m.props)}
              </div>
            </div>
          );
        })}
      </div>
    </Spin>
  );
};

export default CanvasBody;
