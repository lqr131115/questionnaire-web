import React, { FC } from "react";
import { useTitle } from "ahooks";
import CanvasBody from "./CanvasBody";
import { useRequestQNDetail } from "@/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId } from "@/store/counter/qnc";
import styles from "./index.module.scss";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import EditHeader from "./EditHeader";

const Edit: FC = () => {
  useTitle("问卷编辑");
  const { loading } = useRequestQNDetail();
  const dispatch = useAppDispatch();
  const clearQncActiveId = () => {
    dispatch(setQncActiveId(""));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <EditHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftPanel />
        </div>
        <div className={styles.main} onClick={clearQncActiveId}>
          <div className={styles.canvas}>
            <CanvasBody loading={loading} />
          </div>
        </div>
        <div className={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default Edit;
