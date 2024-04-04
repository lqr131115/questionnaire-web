import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { MANAGE_LIST_PATH } from "../router";
const { Title } = Typography;
const Home: FC = () => {
  useTitle("Home");
  const navigator = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <Title>问卷调查</Title>
        <Button type="primary" onClick={() => navigator(MANAGE_LIST_PATH)}>
          开始使用
        </Button>
      </div>
    </>
  );
};

export default Home;
