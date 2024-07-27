import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./index.module.scss";
import { getMaterialByType } from "@/components/QNComponents";
import { useGetQncInfo } from "@/hooks";

type QNInfoProps = {
  loading: boolean;
  activeId: string;
  setActiveId: (id: string) => void;
  setActiveType: (type: string) => void;
};

const QnInfo: FC<QNInfoProps> = (props) => {
  const { loading, activeId, setActiveId, setActiveType } = props;
  const { list: componentList } = useGetQncInfo();
  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <div className={styles.container}>
        {componentList
          .filter((c) => !c.hidden)
          .map((m) => {
            const { qn_id, type, props: qncProps } = m;
            const wrapperCls = styles.wrapper,
              activeCls = styles.active;
            const containerCls = classNames({
              [wrapperCls]: true,
              [activeCls]: activeId === qn_id,
            });
            return (
              <div
                key={qn_id}
                className={containerCls}
                onClick={() => {
                  setActiveId(qn_id), setActiveType(type);
                }}
              >
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
