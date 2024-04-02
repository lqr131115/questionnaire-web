import React, { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounceFn, useTitle } from "ahooks";
import { Empty, Flex, Spin, Typography, message } from "antd";
import type { Questionnaire } from "./manage";
import styles from "./List.module.scss";
import QuestionCard from "../../components/QuestionCard";
import QuestionHeader from "../../components/QuestionHeader";
import { getQNList } from "../../api";
import {
  SEARCH_LIST_DEFAULT_PAGESIZE,
  SEARCH_LIST_KEYWORD_KEY,
} from "../../constants";
const { Text } = Typography;

const List: FC = () => {
  useTitle("我的问卷");

  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(Number.MAX_SAFE_INTEGER);
  const [qnList, setQNList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const noMore = qnList.length >= total;
  const [searchParams] = useSearchParams();
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const screenHeight = window.innerHeight || document.body.clientHeight;
  const { run: debounceLoadMore } = useDebounceFn(
    () => {
      const ele = loadMoreRef.current;
      if (ele == null) return;
      const rect = ele.getBoundingClientRect();
      if (rect == null) return;
      const { top } = rect;
      if (top < screenHeight + 5) {
        doLoadMore();
      }
    },
    {
      wait: 300,
    },
  );

  async function doLoadMore() {
    try {
      if (noMore) {
        message.warning("已加载全部");
        return;
      }
      setLoading(true);
      const res = await getQNList({
        page,
        pageSize: SEARCH_LIST_DEFAULT_PAGESIZE,
        keyword: searchParams.get(SEARCH_LIST_KEYWORD_KEY) || "",
      });
      setQNList([...qnList, ...res.data]);
      setPage(page + 1);
    } catch (err) {
      console.log("doLoadMore", err);
    } finally {
      setLoading(false);
    }
  }

  // 加载初始页 或者 keyword变化触发
  useEffect(() => {
    setLoading(true);
    getQNList({ keyword: searchParams.get(SEARCH_LIST_KEYWORD_KEY) || "" })
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
  }, [searchParams]);

  useEffect(() => {
    window.addEventListener("scroll", debounceLoadMore);
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("removeEventListener");
      });
    };
  }, [searchParams]);

  return (
    <>
      <QuestionHeader title="我的问卷" />
      <div className={styles.container}>
        <Spin spinning={loading} size="large">
          {!loading && qnList?.length === 0 && <Empty />}
          {qnList?.length > 0 && (
            <>
              {qnList.map((item: Questionnaire) => (
                <QuestionCard key={item.id} {...item} />
              ))}
              <Flex justify="center" align="center" ref={loadMoreRef}>
                {noMore ? <Text>已加载全部</Text> : <Text>下拉加载更多</Text>}
              </Flex>
            </>
          )}
        </Spin>
      </div>
    </>
  );
};

export default List;
