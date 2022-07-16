import React from "react";
import ImageSlider from "./ImageSlider";
import LinearSlider from "./LinearSlider";

// import { ReactComponent as NotiIcon } from "/asset/noti_icon.svg";
// import { ReactComponent as MyPageIcon } from "/asset/my_page_icon.svg";
export default {
  component: ImageSlider,
  title: "ImageSlider",
};

const dummyImages = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg",
    targetUrl: "/",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg",
    targetUrl: "/",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/02/22/14/55/desktop-3173176_1280.jpg",
    targetUrl: "/",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg",
    targetUrl: "/",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_1280.jpg",
    targetUrl: "/",
  },
];

const Template = (args) => <ImageSlider {...args} />;
const LinearTemplate = (args) => <LinearSlider {...args} />;

export const BasicSlider = Template.bind({});
export const PerspectiveSlider = Template.bind({});
export const ResponsiveItemsSlider = Template.bind({});
export const BasicLinearSlider = LinearTemplate.bind({});
// export const Theme3 = Template.bind({});
// export const Theme4 = Template.bind({});

BasicSlider.args = {
  theme: "theme1",
  items: dummyImages,
  itemHeight: 350,
  delay: 3000,
  speed: 1000,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  borderRadius: 0,
  useIndicator: true,
  indicatorStyle: null,
};

PerspectiveSlider.args = {
  theme: "theme1",
  items: dummyImages,
  itemHeight: 350,
  indicatorSize: 0,
  indicatorActiveColor: "",
  indicatorMuteColor: "",
  delay: 3000,
  speed: 1000,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  borderRadius: 20,
  responsive: [
    [1, 0], // mobile - slidesPerView, spaceBetween
    [1, 0], // tablet - slidesPerView, spaceBetween
    [1, 0], // pc - slidesPerView, spaceBetween
    [1, 0], // wide pc - slidesPerView, spaceBetween
  ],
  useIndicator: true,
  indicatorStyle: null,
};

ResponsiveItemsSlider.args = {
  theme: "theme2",
  items: dummyImages,
  itemHeight: 200,
  indicatorSize: 0,
  indicatorActiveColor: "",
  indicatorMuteColor: "",
  delay: 3000,
  speed: 1000,
  autoplay: true,
  // slidesPerView: 1,
  // spaceBetween: 0,
  responsive: [
    [2, 5], // mobile - slidesPerView, spaceBetween
    [3, 8], // tablet - slidesPerView, spaceBetween
    [4, 10], // pc - slidesPerView, spaceBetween
    [4, 10], // wide pc - slidesPerView, spaceBetween
  ],
  loop: true,
  borderRadius: 20,
  useIndicator: false,
  indicatorStyle: null,
};

BasicLinearSlider.args = {
  responsive: [
    [2, 5], // mobile - slidesPerView, spaceBetween
    [3, 8], // tablet - slidesPerView, spaceBetween
    [4, 10], // pc - slidesPerView, spaceBetween
    [4, 10], // wide pc - slidesPerView, spaceBetween
  ],
};
