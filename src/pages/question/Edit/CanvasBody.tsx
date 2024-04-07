import React, { FC } from "react";
import styles from "./canvasbody.module.scss";
import QNTitle from "../../../components/QNComponents/QNTitle/component";
import QNInput from "../../../components/QNComponents/QNInput/component";
const CanvasBody: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.disabled}>
          <QNTitle text="你好" level={2} align="end" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.disabled}>
          <QNInput title="你好" placeholder="请输入" />
        </div>
      </div>
    </div>
  );
};

export default CanvasBody;
