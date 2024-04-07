import React, { FC } from "react";
import { useTitle } from "ahooks";
import Icon from "@ant-design/icons";
import CanvasBody from "./CanvasBody";
import { useRequestQNDetail } from "../../../hooks";
import { useAppDispatch } from "../../../store/hooks";
import { setQncActiveId } from "../../../store/counter/qnc";
import styles from "./index.module.scss";
// import QNTitleSvg from "../../../icons/svg/title.svg";
import { ReactComponent as QNTitleSvg } from "../../../icons/svg/title.svg";
const Edit: FC = () => {
  useTitle("问卷编辑");
  const { loading } = useRequestQNDetail();
  const dispatch = useAppDispatch();
  const clearQncActiveId = () => {
    dispatch(setQncActiveId(""));
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles.content}>
        <div className={styles.left}>
          left
          <Icon component={() => <QNTitleSvg />} />
        </div>
        <div className={styles.main} onClick={clearQncActiveId}>
          <div className={styles.canvas}>
            <CanvasBody loading={loading} />
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
};

export default Edit;
