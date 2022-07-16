import type { NextPage } from "next";
import ImageSlider from "../components/Swiper/ImageSlider";
import SidebarLayout from "../components/layout/SidebarLayout";
import ContentList from "../components/contentList/ContentList";
import styled from "styled-components";
import FeedList from "../components/contentList/FeedList";
import dayjs from "dayjs";
import useSWR from "swr";
import { BACKEND_URL } from "../config";
import { fetcher } from "../globalFunction";
import Skeleton from "../components/skeleton/Skeleton";

interface Props {
  appStore?: any;
}

const Home: NextPage<Props> = ({ appStore }) => {
  const { data } = useSWR(`${BACKEND_URL}/board/feed/1/10`, fetcher);

  return (
    <SidebarLayout title="TITLE" disabledHeader={true} useFixed={true}>
      <div style={{ width: "100%", height: 40 }}></div>

      {data ? (
        <FeedList datas={data} totalCount={100} limit={10} useInfiniteScroll />
      ) : (
        <Skeleton type="feed" />
      )}
    </SidebarLayout>
  );
};

const SectionWrapper = styled.div`
  widht: 100%;
  padding: 100px 0 0 0;
`;

export default Home;
