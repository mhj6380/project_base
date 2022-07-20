import type { NextPage } from "next";
import SidebarLayout from "../components/layout/SidebarLayout";
import FeedList from "../components/contentList/FeedList";
import useSWR from "swr";
import { BACKEND_URL } from "../config";
import { fetcher } from "../globalFunction";
import Skeleton from "../components/skeleton/Skeleton";

interface Props {
  appStore?: any;
}

const Home: NextPage<Props> = () => {
  const { data } = useSWR(`${BACKEND_URL}/board/feed/1/10`, fetcher);

  return (
    <SidebarLayout
      title="TITLE"
      disabledHeader={true}
      useFixed={true}
      requiredLogin={true}
    >
      <div style={{ width: "100%", height: 40 }}></div>

      {data ? (
        <FeedList datas={data} totalCount={100} limit={10} useInfiniteScroll />
      ) : (
        <Skeleton type="feed" />
      )}
    </SidebarLayout>
  );
};

export default Home;
