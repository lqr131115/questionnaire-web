import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./canvasbody.module.scss";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { getMaterialByType } from "@/components/QNComponents";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId } from "@/store/counter/qnc";
import { useCanvasKeyPress } from "@/hooks";
type CanvasBodyProps = {
  loading: boolean;
};

const CanvasBody: FC<CanvasBodyProps> = (props) => {
  const { loading } = props;
  const { list: componentList, activeId } = useGetQncInfo();
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(setQncActiveId(id));
  };
  useCanvasKeyPress(componentList, activeId);
  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <div className={styles.container}>
        {componentList
          .filter((c) => !c.hidden)
          .map((m) => {
            const { qn_id, locked } = m;
            const wrapperCls = styles.wrapper,
              activeCls = styles.active,
              lockedCls = styles.locked;
            const containerCls = classNames({
              [wrapperCls]: true,
              [activeCls]: activeId === qn_id,
              [lockedCls]: locked,
            });
            return (
              <div
                className={containerCls}
                key={qn_id}
                onClick={(event: any) => handleClick(event, qn_id)}
              >
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
