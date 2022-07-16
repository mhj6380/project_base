import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Link from "next/link";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const LinearSliderWrapper = styled.div`
  width: 100%;
  // height: 100%;
  // display: flex;
  // flex-flow: row wrap;
  overflow: hidden;
  .swiper-wrapper {
    padding: 20px !important;
    -webkit-transition-timing-function: linear !important;
    -o-transition-timing-function: linear !important;
    transition-timing-function: linear !important;
  }
`;

interface Props {
  responsive: any;
  reverseDirection: boolean;
}

const data = [
  { id: 1, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 2, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 3, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 4, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 5, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 6, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 7, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 8, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 9, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 10, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 11, url: "https://themetakongz.com/_img/nft_konz_5.png" },
  { id: 12, url: "https://themetakongz.com/_img/nft_konz_5.png" },
];

const LinearSlider: React.FC<Props> = ({ responsive, reverseDirection }) => {
  return (
    <LinearSliderWrapper>
      <Swiper
        loop={true}
        autoplay={{ delay: 1, disableOnInteraction: true, reverseDirection }}
        style={{ width: "100%" }}
        speed={5000}
        spaceBetween={
          responsive[0][1] === 0 || responsive[0][1] > 0 ? responsive[0][1] : 10
        }
        slidesPerView={responsive[0][0] || 1}
        breakpoints={{
          768: {
            slidesPerView: responsive[1][0] || 1,
            spaceBetween:
              responsive[1][1] === 0 || responsive[1][1] > 0
                ? responsive[1][1]
                : 10,
          },
          992: {
            slidesPerView: responsive[2][0] || 1,
            spaceBetween:
              responsive[2][1] === 0 || responsive[2][1] > 0
                ? responsive[2][1]
                : 10,
          },
          1200: {
            slidesPerView: responsive[3][0] || 1,
            spaceBetween:
              responsive[3][1] === 0 || responsive[3][1] > 0
                ? responsive[3][1]
                : 10,
          },
        }}
        freeMode={true}
        freeModeMomentum={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <NoticeItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        style={{ width: "100%" }}
        speed={5000}
        spaceBetween={
          responsive[0][1] === 0 || responsive[0][1] > 0 ? responsive[0][1] : 10
        }
        slidesPerView={responsive[0][0] || 1}
        breakpoints={{
          768: {
            slidesPerView: responsive[1][0] || 1,
            spaceBetween:
              responsive[1][1] === 0 || responsive[1][1] > 0
                ? responsive[1][1]
                : 10,
          },
          992: {
            slidesPerView: responsive[2][0] || 1,
            spaceBetween:
              responsive[2][1] === 0 || responsive[2][1] > 0
                ? responsive[2][1]
                : 10,
          },
          1200: {
            slidesPerView: responsive[3][0] || 1,
            spaceBetween:
              responsive[3][1] === 0 || responsive[3][1] > 0
                ? responsive[3][1]
                : 10,
          },
        }}
        freeMode={true}
        freeModeMomentum={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <NoticeItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </LinearSliderWrapper>
  );
};

const NoticeItem = ({ item }: any) => {
  return (
    <Link href={`/notice/view?id=${item.id}`}>
      <NoticeItemWrapper>
        <img src={item.url} alt={item.url} />
      </NoticeItemWrapper>
    </Link>
  );
};

const NoticeItemWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }

  .page_title {
    font-size: 30px;
  }

  @media (min-width: 992px) {
    .title {
      font-size: 18px;
      // font-weight: 700;
      height: 60px;
    }
    .createdAt {
      font-size: 17px;
    }
  }
`;

export default LinearSlider;
