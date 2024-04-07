import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./canvasbody.module.scss";
import { useGetQncList } from "../../../hooks/useGetQncList";
import { getMaterialByType } from "../../../components/QNComponents";
import { useAppDispatch } from "../../../store/hooks";
import { setQncActiveId } from "../../../store/counter/qnc";

type CanvasBodyProps = {
  loading: boolean;
};

const CanvasBody: FC<CanvasBodyProps> = (props) => {
  const { loading } = props;
  const { list: componentList, activeId } = useGetQncList();
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation();
    dispatch(setQncActiveId(id));
  };

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
