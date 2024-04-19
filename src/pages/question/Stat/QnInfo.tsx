import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./QNInfo.module.scss";
import { getMaterialByType } from "@/components/QNComponents";
import { useGetQncInfo } from "@/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId } from "@/store/counter/qnc";

type QNInfoProps = {
  loading: boolean;
};

const QnInfo: FC<QNInfoProps> = (props) => {
  const { loading } = props;
  const { list: componentList, activeId } = useGetQncInfo();
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(setQncActiveId(id));
  };
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
                onClick={(event: any) => handleClick(event, qn_id)}
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
