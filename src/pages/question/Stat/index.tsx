import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { useRequestQNDetail } from "@/hooks";
import styles from "./index.module.scss";
import StatHeader from "./StatHeader";
import QnInfo from "./QnInfo";
import QNResponse from "./QNResponse";
import ChartStat from "./ChartStat";

const Edit: FC = () => {
  useTitle("问卷统计");
  const { loading } = useRequestQNDetail();
  const [activeId, setActiveId] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("");
  console.log(activeType);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StatHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <QnInfo
            loading={loading}
            activeId={activeId}
            setActiveId={setActiveId}
            setActiveType={setActiveType}
          />
        </div>
        <div className={styles.main}>
          <QNResponse />
        </div>
        <div className={styles.right}>
          <ChartStat />
        </div>
      </div>
    </div>
  );
};

export default Edit;
