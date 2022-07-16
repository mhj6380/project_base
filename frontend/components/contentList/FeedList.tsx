import React from "react";
import { Pagination } from "antd";
import { ContentListProps, ListTitleWrapper } from "./ContentList.styled";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Card } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import { BiCommentDetail } from "react-icons/bi";
import ImageSlider from "../Swiper/ImageSlider";
import styled from "styled-components";
import { fetcher } from "../../globalFunction";
import { BACKEND_URL } from "../../config";
import useSWRInfinite from "swr/infinite";
import InfiniteScroll from "react-infinite-scroll-component";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const FeedList: React.FC<ContentListProps> = ({
  datas,
  responsive,
  gap,
  page,
  limit,
  totalCount,
  handleChangePage,
  actions,
  pagination,
  useInfiniteScroll,
  listTitle,
  usePagination,
  useMobileSwiperMode,
}) => {
  const offset = React.useRef(13);
  const [hasMore, setHasMore] = React.useState(true);
  const moreContentLoading = React.useRef(false);

  // 무한스크롤 사용시에만 작동
  // React.useEffect(() => {
  //   if (!useInfiniteScroll) return;
  //   if (!datas || datas.length === 0) {
  //     return;
  //   }
  //   offset.current = limit || 10;
  //   console.log("offset.current !", offset.current);

  //   window.addEventListener("scroll", () => {
  //     infinityScroll(hasMore, moreContentLoading, setSize, size);
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       infinityScroll(hasMore, moreContentLoading, setSize, size);
  //     });
  //   };
  // }, [datas, offset]);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `${BACKEND_URL}/board/feed/${index === 0 ? 1 : index + 1}/${limit}`,
    fetcher
  );

  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < limit);
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <ThemeProvider theme={theme}>
      {/* <button 
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "loading..."
          : isReachingEnd
          ? "no more items"
          : "load more"}
      </button> */}
      <FeedListWrapper>
        {listTitle && (
          <ListTitleWrapper listTitle={listTitle}>
            <h2>{listTitle.title}</h2>
            {listTitle.actionText && (
              <Link href={listTitle.actionLink || "/"}>
                <a className="list_more">{listTitle.actionText}</a>
              </Link>
            )}
          </ListTitleWrapper>
        )}

        <InfiniteScroll
          dataLength={issues.length}
          next={() => {
            setSize(size + 1);
          }}
          hasMore={!isReachingEnd}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>더이상 목록이 없습니다.</b>
            </p>
          }
        >
          {issues.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              cover={
                <>
                  <div
                    className="feed_card_content"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <div className="feed_card_images">
                    <ImageSlider
                      borderRadius={0}
                      speed={500}
                      // indicatorActiveColor=""
                      // indicatorMuteColor=""
                      slidesPerView={1}
                      useIndicator={true}
                      indicatorStyle={null}
                      itemHeight={350}
                      items={item.imageList.map((item, index) => {
                        return {
                          id: index,
                          imageUrl: item.imageUrl,
                          targetUrl: null,
                        };
                      })}
                      loop
                      spaceBetween={0}
                      theme="theme1"
                    />
                  </div>
                </>
              }
              actions={[
                <AiOutlineHeart key="setting" />,
                <BiCommentDetail key="comment" />,
                <GiShare key="share" />,
              ]}
            >
              {/* <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            /> */}
            </Card>
          ))}
        </InfiniteScroll>
        <br />
        {usePagination && (
          <Pagination
            onChange={handleChangePage}
            defaultCurrent={page}
            total={totalCount}
            pageSize={limit}
          />
        )}
      </FeedListWrapper>
    </ThemeProvider>
  );
};
const FeedListWrapper = styled.div`
  background: #ededed;
  padding-top: 20px;
  .ant-card {
    margin-bottom: 20px;
  }
  .ant-card-head-title {
    font-weight: 700;
  }
  .feed_card_content {
    width: 100%;
    padding: 20px;
  }
`;

const infinityScroll = (
  hasMore: any,
  moreContentLoading: any,
  setSize,
  size
) => {
  console.log("infinity_1");
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight - 500) {
    console.log("infinity_2");
    if (hasMore.current) {
      if (!moreContentLoading.current) {
        // pushNewDatas();
        setSize(size + 1);
        console.log("infinity_3");
      }
    }
  }
};

const pushNewDatas = () => {};

export default FeedList;
