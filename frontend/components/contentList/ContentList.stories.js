import React from "react";
import ContentList from "./ContentList";
// import TableContentList from "./TableContentList";
import dayjs from "dayjs";
// import {
//   dummyShortContents,
//   dummyLongContents,
//   dummyShortGallery,
// } from "../../datas/dummy";

import { AiOutlineHeart, AiOutlineEye, AiTwotoneProject } from "react-icons/ai";

export default {
  component: ContentList,
  title: "ContentList",
};

const dummyShortContents = [
  {
    id: 1,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/06/21/21/56/konigssee-7276585_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/06/21/07/50/dogs-7275314_1280.jpg",
    title:
      "콘텐츠 타이틀입니다. 제목이 길다면 이렇게 노출됩니다 제목이 길다면 이렇게 노출됩니당 으하하하하하 ",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",
    title: "콘텐츠 타이틀입니다.",
    subTitle: "콘텐츠 서브타이틀 입니다.",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
];

const dummyShortGallery = [
  {
    id: 1,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/06/21/21/56/konigssee-7276585_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 2,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/06/21/07/50/dogs-7275314_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 3,
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 4,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 5,
    thumbnail:
      "https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 6,
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 7,
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/06/13/18/20/waves-3473335_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 8,
    thumbnail:
      "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",
    title: null,
    subTitle: null,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
];

const dummyShortText = [
  {
    id: 1,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 2,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 3,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 4,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 5,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 6,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 7,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
  {
    id: 8,
    thumbnail: null,
    title: "타이틀 입니다",
    subTitle: "타이틀 입니다",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    viewCount: 10,
    likeCount: 10,
  },
];

const Template = (args) => <ContentList {...args} />;
// const TableTemplate = (args) => <TableContentList {...args} />;

export const GridContentsMobileSwiper = Template.bind({});
export const GridContentsPagination = Template.bind({});
export const PickContentMobileSwiper = Template.bind({});
export const PickContentPagination = Template.bind({});
export const GalleryContents = Template.bind({});
export const ListContents = Template.bind({});
// export const TableListContents = TableTemplate.bind({});

GridContentsMobileSwiper.args = {
  useMobileSwiperMode: true,
  datas: dummyShortContents,
  gap: 1,
  responsive: {
    mobile: 2.4, // for Swiper
    tablet: 3.2,
    pc: 3,
  },
  useInfoAbsolute: true,
  useGradientFilter: true,
  useCreatedAt: true,
  infoBackgroundColor: "none",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 300,
  fontSize: {
    title: 20,
  },
  color: {
    title: "#fff",
  },
  actions: [
    {
      icon: <AiOutlineHeart />,
      field: "likeCount",
    },
    {
      icon: <AiOutlineEye />,
      field: "viewCount",
    },
  ],
  pagination: {},
  listTitle: {
    title: "모바일은 Swiper",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
};

GridContentsPagination.args = {
  datas: dummyShortContents,
  gap: 1,
  responsive: {
    mobile: 6,
    tablet: 4,
    pc: 3,
  },
  useInfoAbsolute: true,
  useGradientFilter: true,
  useCreatedAt: true,
  infoBackgroundColor: "none",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 300,
  fontSize: {
    title: 20,
  },
  color: {
    title: "#fff",
  },
  actions: [
    {
      icon: <AiOutlineHeart />,
      field: "likeCount",
    },
    {
      icon: <AiOutlineEye />,
      field: "viewCount",
    },
  ],
  usePagination: true,
  pagination: {},
  listTitle: {
    title: "오늘의 추천컨텐츠",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
};

PickContentMobileSwiper.args = {
  useMobileSwiperMode: true,
  datas: dummyShortContents,
  gap: 1,
  responsive: {
    mobile: 6,
    tablet: 4,
    pc: 3,
  },
  borderColor: "lightgrey",
  useInfoAbsolute: false,
  useGradientFilter: false,
  useCreatedAt: false,
  infoBackgroundColor: "#fff",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 200,
  fontSize: {
    title: 16,
  },
  color: {},
  actions: [],
  pagination: {},
  listTitle: {
    title: "피키캐스트 컨텐츠 테마",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
};

PickContentPagination.args = {
  usePagination: true,
  datas: dummyShortContents,
  gap: 1,
  responsive: {
    mobile: 6,
    tablet: 4,
    pc: 3,
  },
  borderColor: "lightgrey",
  useInfoAbsolute: false,
  useGradientFilter: false,
  useCreatedAt: false,
  infoBackgroundColor: "#fff",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 200,
  fontSize: {
    title: 16,
  },
  color: {},
  actions: [],
  pagination: {},
  listTitle: {
    title: "피키캐스트 컨텐츠 테마",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
};

GalleryContents.args = {
  datas: dummyShortGallery,
  gap: 0.1,
  responsive: {
    mobile: 6,
    tablet: 4,
    pc: 3,
  },
  useInfoAbsolute: true,
  useGradientFilter: false,
  useHoverScaleEffect: true,
  infoBackgroundColor: "none",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 300,
  actions: [
    {
      icon: <AiOutlineHeart />,
      field: "likeCount",
    },
    {
      icon: <AiOutlineEye />,
      field: "viewCount",
    },
  ],
  color: {
    title: "none",
    actions: "#fff",
  },
  pagination: {},
  listTitle: {
    title: "Gallery Template",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
};

ListContents.args = {
  usePagination: true,
  datas: dummyShortContents,
  gap: 1,
  responsive: {
    mobile: 12,
    tablet: 4,
    pc: 3,
  },
  useInfoAbsolute: false,
  useGradientFilter: false,
  useCreatedAt: false,
  infoBackgroundColor: "#fff",
  titleBottomMargin: 20,
  totalCount: 100,
  page: 1,
  limit: 12,
  thumbnailHeight: 200,
  thumbnailRadius: 10,
  fontSize: {
    title: 16,
  },
  color: {},
  actions: [],
  pagination: {},
  listTitle: {
    title: "피키캐스트 컨텐츠 테마",
    actionText: "+ More",
    fontSize: 35,
    color: "#1a1a1a",
    fontWeight: 700,
  },
  useMobileListMode: true,
  useMobileListOption: {
    thumbnailWidth: 30,
    thumbnailHeight: 100,
    infoVerticalPadding: 5,
    infoHorizontalPadding: 15,
  },
  infoPadding: 10,
};

// TableListContents.args = {
//   datas: dummyShortText,
//   titleBottomMargin: 20,
//   totalCount: 100,
//   page: 1,
//   limit: 12,
//   color: {
//     title: "none",
//   },
//   pagination: {},
//   listTitle: {
//     title: "Gallery Template",
//     actionText: "+ More",
//     fontSize: 35,
//     color: "#1a1a1a",
//     fontWeight: 700,
//   },
// };
