import React, { FC } from "react";
import { useTitle } from "ahooks";
const Home: FC = () => {
  useTitle("Home");
  return <div>I AM HOME</div>;
};

export default Home;
