import React, { FC } from "react";
import { useParams } from "react-router-dom";

const Edit: FC = () => {
  const params = useParams();
  return <div>I AM {JSON.stringify(params)}</div>;
};

export default Edit;
