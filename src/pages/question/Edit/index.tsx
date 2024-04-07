import React, { FC } from "react";
import { useTitle } from "ahooks";
import styles from "./index.module.scss";
// import { useRequestQNDetail } from "../../../hooks";
import CanvasBody from "./CanvasBody";
const Edit: FC = () => {
  useTitle("问卷编辑");
  // const { data: detail } = useRequestQNDetail();
  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles.content}>
        <div className={styles.left}>left</div>
        <div className={styles.main}>
          <div className={styles.canvas}>
            {/* {detail && (detail as any).title} */}
            <CanvasBody />
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
};

export default Edit;
