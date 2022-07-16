import React from "react";
import ContentItem from "../contentItem/ContentItem";
import ListContentItem from "../contentItem/ListContentItem";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@material-ui/core/Grid";
import { Pagination } from "antd";
import {
  ContentListProps,
  ContentListWrapper,
  infinityScroll,
  ListTitleWrapper,
} from "./ContentList.styled";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@material-ui/core";

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

const ContentList: React.FC<ContentListProps> = ({
  datas,
  responsive,
  gap,
  page,
  limit,
  totalCount,
  handleChangePage,
  color,
  fontSize,
  useInfoAbsolute,
  infoBackgroundColor,
  titleBottomMargin,
  useGradientFilter,
  gradientFilterColor,
  actions,
  pagination,
  useInfiniteScroll,
  thumbnailHeight,
  listTitle,
  usePagination,
  useCreatedAt,
  borderColor,
  useShadow,
  useHoverScaleEffect,
  useMobileSwiperMode,
  useMobileListMode,
  thumbnailRadius,
  useMobileListOption,
  infoPadding,
}) => {
  const offset = React.useRef(13);
  const hasMore = React.useRef(true);
  const moreContentLoading = React.useRef(false);

  // 무한스크롤 사용시에만 작동
  React.useEffect(() => {
    if (!useInfiniteScroll) return;
    if (!datas || datas.length === 0) {
      return;
    }
    offset.current = limit || 10;
    console.log("offset.current !", offset.current);

    // window.addEventListener("scroll", () => {
    //   infinityScroll(hasMore, moreContentLoading);
    // });

    // return () => {
    //   window.removeEventListener("scroll", () => {
    //     infinityScroll(hasMore, moreContentLoading);
    //   });
    // };
  }, [datas, offset]);

  return (
    <ThemeProvider theme={theme}>
      <ContentListWrapper responsive={responsive} pagination={pagination}>
        {/* {JSON.stringify(listTitle)} */}
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

        {useMobileSwiperMode && (
          <div className="no_pc">
            <Swiper
              loop={true}
              style={{ width: "100%" }}
              // speed={2000}
              spaceBetween={gap * 10 || 10}
              // slidesPerView={responsive.mobile}
              slidesPerView={"auto"}
              breakpoints={{
                0: {
                  slidesPerView: responsive.mobile,
                },

                768: {
                  slidesPerView: responsive.tablet,
                },
              }}
            >
              {datas.map((item: any) => (
                <SwiperSlide key={item.id}>
                  <ContentItem
                    thumbnailHeight={thumbnailHeight}
                    item={item}
                    color={color}
                    fontSize={fontSize}
                    useInfoAbsolute={useInfoAbsolute}
                    infoBackgroundColor={infoBackgroundColor}
                    titleBottomMargin={titleBottomMargin}
                    useGradientFilter={useGradientFilter}
                    gradientFilterColor={gradientFilterColor}
                    actions={actions}
                    useCreatedAt={useCreatedAt}
                    borderColor={borderColor}
                    useShadow={useShadow}
                    useHoverScaleEffect={useHoverScaleEffect}
                    useMobileListMode={useMobileListMode}
                    thumbnailRadius={thumbnailRadius}
                    useMobileListOption={useMobileListOption}
                    infoPadding={infoPadding}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <Grid
          className={(useMobileSwiperMode && "only_pc") || "none"}
          container
          spacing={gap}
        >
          {datas.map((item: any) => (
            <Grid
              key={"grid" + item.id}
              item
              className="content_wrapper"
              xs={responsive?.mobile || 1}
              md={responsive?.tablet || 1}
              lg={responsive?.pc || 1}
            >
              <ContentItem
                thumbnailHeight={thumbnailHeight}
                item={item}
                color={color}
                fontSize={fontSize}
                useInfoAbsolute={useInfoAbsolute}
                infoBackgroundColor={infoBackgroundColor}
                titleBottomMargin={titleBottomMargin}
                useGradientFilter={useGradientFilter}
                gradientFilterColor={gradientFilterColor}
                actions={actions}
                useCreatedAt={useCreatedAt}
                borderColor={borderColor}
                useShadow={useShadow}
                useHoverScaleEffect={useHoverScaleEffect}
                useMobileListMode={useMobileListMode}
                thumbnailRadius={thumbnailRadius}
                useMobileListOption={useMobileListOption}
                infoPadding={infoPadding}
              />
            </Grid>
          ))}
        </Grid>
        <br />
        {usePagination && (
          <Pagination
            onChange={handleChangePage}
            defaultCurrent={page}
            total={totalCount}
            pageSize={limit}
          />
        )}
      </ContentListWrapper>
    </ThemeProvider>
  );
};

export default ContentList;
