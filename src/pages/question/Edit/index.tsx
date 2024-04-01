import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "ahooks";
import { getQNDetail } from "../../../api";
const Edit: FC = () => {
  useTitle("问卷编辑");
  const params = useParams();
  const [detail, setDetail] = useState<any>({});
  useEffect(() => {
    getQNDetail(params.id as string)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      I AM {JSON.stringify(params)}
      <h1>{detail.title}</h1>
    </>
  );
};

export default Edit;
