import React, { FC } from "react";
import { useTitle } from "ahooks";
import { useRequestQNDetail } from "@/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setQncActiveId } from "@/store/counter/qnc";
import styles from "./index.module.scss";
import StatHeader from "./StatHeader";
import CanvasBody from "../Edit/CanvasBody";
import QNResponse from "./QNResponse";
import ChartStat from "./ChartStat";

const Edit: FC = () => {
  useTitle("问卷统计");
  const { loading } = useRequestQNDetail();
  const dispatch = useAppDispatch();
  const clearQncActiveId = () => {
    dispatch(setQncActiveId(""));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StatHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <CanvasBody loading={loading} />
        </div>
        <div className={styles.main} onClick={clearQncActiveId}>
          <div className={styles.wrapper}>
            <QNResponse />
          </div>
        </div>
        <div className={styles.right}>
          <ChartStat />
        </div>
      </div>
    </div>
  );
};

export default Edit;
