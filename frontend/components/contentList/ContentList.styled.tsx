import { GridSpacing } from "@material-ui/core";
import styled from "styled-components";
import { IContentItem } from "../contentItem/ContentItem";

export interface ResponsiveData {
  mobile: any;
  tablet: any;
  pc: any;
}
export interface ListTitleData {
  title: string;
  fontSize?: number;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  actionText?: string;
  actionFontSize?: number;
  fontWeight?: number;
  actionColor?: string;
  actionLink?: string;
}
export interface PaginationData {
  align?: "left" | "center" | "right";
  size?: number;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  borderColor?: string;
  activeBorderColor?: string;
  color?: string;
  activeColor?: string;
  margin?: number;
}
export interface ContentListProps extends IContentItem {
  datas: any;
  totalCount: number;
  handleChangePage?: any;
  responsive?: ResponsiveData;
  gap?: GridSpacing;
  usePagination?: boolean;
  useInfiniteScroll?: boolean;
  page?: number;
  limit?: number;
  pagination?: PaginationData;
  thumbnailHeight?: number;
  listTitle?: ListTitleData;
  useMobileSwiperMode?: boolean;
}

export const ContentListWrapper = styled.div<{
  responsive?: ResponsiveData;
  pagination?: PaginationData;
}>`
  width: 100%;
  // display: flex;

  .only_pc {
    display: none;
  }
  .ant-pagination {
    text-align: ${(props) => props.pagination?.align || "center"};
    display: block;
    width: 100%;
    li {
      display: inline-flex;
    }
    .ant-pagination-prev,
    .ant-pagination-next {
      cursor: pointer;
      background: #fff;
      margin: ${(props) => props.pagination?.margin || 5}px;
      width: ${(props) => props.pagination?.size || 1 * 5 || 35}px;
      height: ${(props) => props.pagination?.size || 1 * 5 || 35}px;
      justify-content: center;
      align-items: center;
      button {
        background: none;
      }
    }
    .ant-pagination-item {
      cursor: pointer;
      background: ${(props) => props.pagination?.backgroundColor || "#fff"};
      margin: ${(props) => props.pagination?.margin || 5}px;
      width: ${(props) => props.pagination?.size || 1 * 5 || 35}px;
      height: ${(props) => props.pagination?.size || 1 * 5 || 35}px;
      justify-content: center;
      align-items: center;
      border: 1px solid
        ${(props) => props.pagination?.borderColor || "lightgrey"};
      a {
        color: ${(props) => props.pagination?.color || "#1a1a1a"};
      }
    }

    .ant-pagination-item-ellipsis {
      margin: 0 auto;
      color: grey;
    }
    .ant-pagination-jump-prev {
      width: 40px;

      color: grey;
      a {
        display: inline-block;
        margin: 0 auto;
      }
      .anticon-double-left {
        display: none;
      }
    }
    .ant-pagination-jump-next {
      width: 40px;
      text-align: center;
      color: grey;
      a {
        display: inline-block;
        margin: 0 auto;
      }
      .anticon-double-right {
        display: none;
      }
    }

    .ant-pagination-item-active {
      background: ${(props) =>
        props.pagination?.activeBackgroundColor || "#fff"};
      border: 1px solid
        ${(props) => props.pagination?.activeBorderColor || "#285d93"};
      a {
        font-weight: 700;
        color: ${(props) => props.pagination?.activeColor || "#285d93"};
      }
    }
  }
  .ant-pagination-options-size-changer {
    background: #fff;

    width: 120px;
    height: 40px;
    padding: 0 !important;
    display: none;
  }
  @media (min-width: 992px) {
    .no_pc {
      display: none;
    }
    .only_pc {
      display: flex;
    }
  }
`;

export const ListTitleWrapper = styled.div<{ listTitle: any }>`
  width: 100%;
  position: relative;
  height: ${(props) => props.listTitle.fontSize + 10 || 40}px;
  margin-bottom: ${(props) => props.listTitle.marginBottom || 10}px;
  margin-bottom: ${(props) => props.listTitle.marginTop || 10}px;
  h2 {
    color: ${(props) => props.listTitle.color || "#1a1a1a"};
    font-size: ${(props) => props.listTitle.fontSize * 0.6 || 10}px;
    font-weight: ${(props) => props.listTitle.fontWeight || 500};
  }
  .list_more {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    color: ${(props) => props.listTitle.actionColor || "grey"};
    font-size: ${(props) => props.listTitle.actionFontSize || 14}px;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: ${(props) => props.listTitle.fontSize || 10}px;
    }
  }
`;

export const infinityScroll = (hasMore: any, moreContentLoading: any) => {
  let scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );
  let scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight - 300) {
    if (hasMore.current) {
      if (!moreContentLoading.current) {
        pushNewDatas();
      }
    }
  }
};

export const pushNewDatas = async () => {
  console.log("infinity scroll!");
  // alert("scroll!");
  // moreContentLoading.current = true;
  // // if (!moreContentLoading.current) return;
  // fetchMore({
  //   variables: {
  //     user_id,
  //     model: modelArr.current,
  //     tag: tagArr.current,
  //     offset: offset.current,
  //     limit,
  //     high,
  //   },
  //   updateQuery: (prev: any, { fetchMoreResult, ...rest }: any) => {
  //     console.log(rest);
  //     if (!fetchMoreResult.pictorials.length) {
  //       hasMore.current = false;
  //       return prev;
  //     }
  //     moreContentLoading.current = false;
  //     return {
  //       ...fetchMoreResult,
  //       pictorials: prev.pictorials.concat(...fetchMoreResult.pictorials),
  //     };
  //   },
  // });
  // await upperInfinite();
};
