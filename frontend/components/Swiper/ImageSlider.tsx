import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay, Pagination } from "swiper";

// import "swiper/css";

interface SlideViewData {
  slidesPerView: number;
  spaceBetween: number;
}
interface ResponsiveMetadata {
  mobile: SlideViewData;
  tablet: SlideViewData;
  pc: SlideViewData;
  wide: SlideViewData;
}

interface SliderItem {
  id: number;
  imageUrl: string;
  targetUrl: string;
}
interface IndicatorStyle {
  indicatorWidth?: number;
  indicatorHeight?: number;
  indicatorActiveWidth?: number;
  indicatorACtiveHeight?: number;
  indicatorActiveColor?: string;
  indicatorMuteColor?: string;
  indicatorBorderRadius?: number;
  indicatorActiveBorderRadius?: number;
  indicatorHorizontalAlign?: "left" | "center" | "right";
  indicatorVerticalAlign?: "top" | "bottom";
  indicatorPositionLeft?: number;
  indicatorPositionRight?: number;
  indicatorPositionTop?: number;
  indicatorPositionBottom?: number;
  itemHeight: number;
  mobileHeight: number;
}

interface Props {
  theme?: "theme1" | "theme2";
  items: SliderItem[];
  delay?: number;
  speed: number;
  autoplay?: boolean;
  slidesPerView: number;
  spaceBetween: number;
  borderRadius: number;
  itemHeight: number;
  useIndicator?: boolean;

  responsive?: ResponsiveMetadata;
  indicatorStyle: IndicatorStyle | null;
  loop: boolean;
}

const ImageSlider: React.FC<Props> = ({
  items,
  // delay,
  speed,
  autoplay,
  itemHeight,
  // slidesPerView,
  // spaceBetween,
  // responsive,
  borderRadius,
  indicatorStyle,
  useIndicator,
  // loop,
}) => {
  // const headerActive = isActive || scrollY > 50;
  const modules = [];

  if (autoplay) {
    modules.push(Autoplay);
  }
  if (useIndicator) {
    modules.push(Pagination);
  }

  SwiperCore.use(modules);

  return (
    <ImageSliderWrapper
      borderRadius={borderRadius}
      itemHeight={itemHeight}
      indicatorStyle={indicatorStyle}
    >
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > */}
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
          reverseDirection: false,
        }}
        style={{ width: "100%" }}
        speed={speed || 2000}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}

        // navigation={true}
        // freeMode={true}
        // freeModeMomentum={false}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.imageUrl} alt={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderWrapper>
  );
};

const ImageSliderWrapper = styled.div<{
  backgroundColor?: string;
  textColor?: string;
  textMuteColor?: string;
  borderColor?: string;
  logoSize?: number;
  verticalPadding?: number;
  logoMarginLeft?: number;
  infoAlign?: "left" | "center" | "right";
  borderRadius?: number;
  indicatorStyle?: any;
  itemHeight?: number;
}>`
  width: 100%;
  position: relative;
  .swiper-container {
    // overflow-y: visible !important;
    // overflow-x: visible !important;
  }

  .swiper-slide {
    border-radius: ${(props) => props.borderRadius || 0}px;
    overflow: hidden;

    height: ${(props) => props.itemHeight || 200 * 0.6}px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper-pagination {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
    text-align: ${(props) =>
      props.indicatorStyle?.indicatorHorizontalAlign || "center"};
    ${(props) =>
      props.indicatorStyle?.indicatorVerticalAlign === "top"
        ? `top: ${props.indicatorStyle?.indicatorPositionTop || 10}px;`
        : `bottom: ${props.indicatorStyle?.indicatorPositionBottom || 10}px;`}

    ${(props) =>
      props.indicatorStyle?.indicatorHorizontalAlign === "left" &&
      `left:${props.indicatorStyle?.indicatorPositionLeft || 0}px;`}
      
    ${(props) =>
      props.indicatorStyle?.indicatorHorizontalAlign === "right" &&
      `right:${props.indicatorStyle?.indicatorPositionRight || 0}px;`}    

    .swiper-pagination-bullet {
      transition: all 0.3s;
      display: inline-block;
      width: ${(props) => props.indicatorStyle?.indicatorWidth || 10}px;
      height: ${(props) => props.indicatorStyle?.indicatorHeight || 10}px;
      background: ${(props) =>
        props.indicatorStyle?.indicatorMuteColor || "lightgrey"};
      margin: 0 5px;
      cursor: pointer;
      border-radius: ${(props) =>
        props.indicatorStyle?.indicatorBorderRadius || 10}px;
    }
    .swiper-pagination-bullet-active {
      background: ${(props) =>
        props.indicatorStyle?.indicatorActiveColor || "#fff"};
      width: ${(props) => props.indicatorStyle?.indicatorActiveWidth || 10}px;
      height: ${(props) => props.indicatorStyle?.indicatorActiveHeight || 10}px;
      border-radius: ${(props) =>
        props.indicatorStyle?.indicatorActiveBorderRadius || 10}px;
    }
  }
  @media (min-width: 768px) {
    .swiper-slide {
      height: ${(props) => props.itemHeight || 200 * 0.8}px;
    }
  }
  @media (min-width: 992px) {
    .swiper-slide {
      height: ${(props) => props.itemHeight || 200 * 0.9}px;
    }

    .pc {
      display: flex !important;
    }
    padding: ${(props) => props.verticalPadding}px 0;
    .main_nav_area {
      display: flex !important;
    }
  }
  @media (min-width: 1200px) {
    .swiper-slide {
      height: ${(props) => props.itemHeight}px;
    }
  }
`;

export default ImageSlider;
