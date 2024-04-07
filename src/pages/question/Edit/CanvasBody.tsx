import React, { FC } from "react";
import { Spin } from "antd";
import styles from "./canvasbody.module.scss";
import { QNTitle, QNInput } from "../../../components/QNComponents/components";

type CanvasBodyProps = {
  loading: boolean;
};

const CanvasBody: FC<CanvasBodyProps> = (props) => {
  const { loading } = props;

  return (
    <Spin spinning={loading} style={{ marginTop: 20 }}>
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
    </Spin>
  );
};

export default CanvasBody;
