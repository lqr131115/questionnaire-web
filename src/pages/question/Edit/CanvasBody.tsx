import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import { useKeyPress } from "ahooks";
import styles from "./canvasbody.module.scss";
import { useGetQncInfo } from "@/hooks/useGetQncInfo";
import { getMaterialByType } from "@/components/QNComponents";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId } from "@/store/counter/qnc";

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
  useKeyPress(["uparrow"], () => {
    if (!activeId) {
      return;
    }
    const idx = componentList.findIndex((m) => m.qn_id === activeId);
    if (~idx) {
      if (idx === 0) {
        return;
      }
      const nextId = componentList[idx - 1].qn_id;
      dispatch(setQncActiveId(nextId));
    }
  });
  useKeyPress(["downarrow"], () => {
    if (!activeId) {
      return;
    }
    const idx = componentList.findIndex((m) => m.qn_id === activeId);
    if (~idx) {
      if (idx === componentList.length - 1) {
        return;
      }
      const nextId = componentList[idx + 1].qn_id;
      dispatch(setQncActiveId(nextId));
    }
  });
  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <div className={styles.container}>
        {componentList.map((m) => {
          const { qn_id } = m;
          const wrapperCls = styles.wrapper,
            activeCls = styles.active;
          const containerCls = classNames({
            [wrapperCls]: true,
            [activeCls]: activeId === qn_id,
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
