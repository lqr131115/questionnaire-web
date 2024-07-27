import React, { FC } from "react";
import { Spin } from "antd";
import classNames from "classnames";
import styles from "./index.module.scss";
import { getMaterialByType } from "@/components/QNComponents";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId, sortQncList } from "@/store/counter/qnc";
import { useCanvasKeyPress, useGetQncInfo } from "@/hooks";
import SortableContainer from "@/components/DragSortable/SortableContainer";
import SortableItem from "@/components/DragSortable/SortableItem";

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
  const sortItems = componentList.map((c) => ({ ...c, id: c.qn_id }));
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    if (oldIndex === newIndex) {
      return;
    }
    dispatch(sortQncList({ oldIndex, newIndex }));
  };
  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
      <SortableContainer items={sortItems} onDragEnd={onDragEnd}>
        <div className={styles.container}>
          {sortItems
            .filter((c) => !c.hidden)
            .map((m) => {
              const { qn_id, locked, id } = m;
              const wrapperCls = styles.wrapper,
                activeCls = styles.active,
                lockedCls = styles.locked;
              const containerCls = classNames({
                [wrapperCls]: true,
                [activeCls]: activeId === qn_id,
                [lockedCls]: locked,
              });
              return (
                <SortableItem key={qn_id} id={id}>
                  <div
                    className={containerCls}
                    onClick={(event: any) => handleClick(event, qn_id)}
                  >
                    <div className={styles.disabled}>
                      {getMaterialByType(m.type)?.component(m.props)}
                    </div>
                  </div>
                </SortableItem>
              );
            })}
        </div>
      </SortableContainer>
    </Spin>
  );
};

export default CanvasBody;
