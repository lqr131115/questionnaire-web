import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
const Stat: FC = () => {
  useTitle("问卷统计");
  const params = useParams();
  return <div>I AM {JSON.stringify(params)}</div>;
};

export default Stat;
