import React, { FC } from "react";
import { Spin } from "antd";
import styles from "./QNInfo.module.scss";
import { getMaterialByType } from "@/components/QNComponents";
import { useGetQncInfo } from "@/hooks";

type QNInfoProps = {
  loading: boolean;
};

const QnInfo: FC<QNInfoProps> = (props) => {
  const { loading } = props;
  const { list: componentList } = useGetQncInfo();

  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <div className={styles.container}>
        {componentList
          .filter((c) => !c.hidden)
          .map((m) => {
            const { qn_id, type, props: qncProps } = m;
            return (
              <div key={qn_id} className={styles.wrapper}>
                <div className={styles.disabled}>
                  {getMaterialByType(type)?.component(qncProps)}
                </div>
              </div>
            );
          })}
      </div>
    </Spin>
  );
};

export default QnInfo;
