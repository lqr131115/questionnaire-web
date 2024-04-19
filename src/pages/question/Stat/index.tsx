import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { useRequestQNDetail } from "@/hooks";
import styles from "./index.module.scss";
import StatHeader from "./StatHeader";
import QnInfo from "./QnInfo";
import QNAnswer from "./QNAnswer";
import ChartStat from "./ChartStat";

const Stat: FC = () => {
  useTitle("问卷统计");
  const { loading: qnInfoLoading } = useRequestQNDetail();
  const [activeId, setActiveId] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <StatHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <QnInfo
            loading={qnInfoLoading}
            activeId={activeId}
            setActiveId={setActiveId}
            setActiveType={setActiveType}
          />
        </div>
        <div className={styles.main}>
          <QNAnswer type={activeType} />
        </div>
        <div className={styles.right}>
          <ChartStat />
        </div>
      </div>
    </div>
  );
};

export default Stat;
