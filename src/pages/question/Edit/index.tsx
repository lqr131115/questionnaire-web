import React, { FC } from "react";
import { useTitle } from "ahooks";
import styles from "./index.module.scss";
// import { useRequestQNDetail } from "../../../hooks";
import { QNTitle, QNInput } from "../../../components/QNComponents/index";
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
            <QNTitle text="你好" level={2} align="end" />
            <QNInput title="你好" placeholder="请输入" />
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
};

export default Edit;
