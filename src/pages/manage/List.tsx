import React, { FC, useEffect, useState } from "react";
import { useTitle } from "ahooks";
import { Empty, Flex, Spin, Button } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { SEARCH_LIST_DEFAULT_PAGESIZE } from "../../constants";
import { getQNList } from "../../api";

const List: FC = () => {
  useTitle("我的问卷");
  function doStar(id: string, value: boolean) {
    alert(`${value ? "收藏" : "取消收藏"}问卷${id}`);
  }
  function doCopy(id: string) {
    alert(`复制问卷${id}`);
  }
  function doDelete(id: string) {
    alert(`删除问卷${id}`);
  }

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [qnList, setQNList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const noMore = page * SEARCH_LIST_DEFAULT_PAGESIZE >= total;

  useEffect(() => {
    setLoading(true);
    getQNList()
      .then((res: any) => {
        setQNList(res.data);
        setTotal(res.total);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function handleLoadMore() {
    try {
      setLoading(true);
      const current = page + 1;
      const newList = await getQNList();
      setPage(current);
      setQNList([...qnList, ...newList.data]);
    } catch (error) {
      console.log("handleLoadMore", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <QuestionHeader title="我的问卷" />
      <div className={styles.container}>
        <Spin spinning={loading} size="large">
          {qnList?.length === 0 && <Empty />}
          {qnList?.length > 0 && (
            <>
              {qnList.map((item: Questionnaire) => (
                <QuestionCard
                  key={item.id}
                  {...item}
                  copy={doCopy}
                  del={doDelete}
                  star={doStar}
                />
              ))}
              <Flex justify="center">
                <Button
                  type="link"
                  block
                  size="large"
                  onClick={handleLoadMore}
                  disabled={noMore}
                >
                  {noMore ? "No More" : "Load more"}
                </Button>
              </Flex>
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default List;
