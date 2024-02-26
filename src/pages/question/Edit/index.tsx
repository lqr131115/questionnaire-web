import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
const Edit: FC = () => {
  useTitle("问卷编辑");
  const params = useParams();
  return <div>I AM {JSON.stringify(params)}</div>;
};

export default Edit;
