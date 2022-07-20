import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export interface IFontSize {
  title?: number;
  subTitle?: number;
  createdAt?: number;
  actions?: number;
}
export interface IColor {
  title?: string;
  subTitle?: string;
  createdAt?: string;
  actions?: string;
  titleBottomMargin?: number;
}
export interface IUseMobileListOption {
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  infoVerticalPadding?: number;
  infoHorizontalPadding?: number;
}

// import
export interface IContentItem {
  infoHeight?: number;
  infoBackgroundColor?: string;
  thumbnailHeight?: number;
  borderRadius?: number;
  item?: any;
  color?: IColor;
  fontSize?: IFontSize;
  useTitleBoard?: boolean;
  useSubTitle?: boolean;
  useInfoAbsolute?: boolean;
  titleBottomMargin?: number;
  useGradientFilter?: string;
  gradientFilterColor?: string;
  actions?: any;
  useCreatedAt?: boolean;
  borderColor?: string;
  useShadow?: boolean;
  useHoverScaleEffect?: boolean;
  infoPadding?: number;
  useMobileListMode?: boolean;
  thumbnailRadius?: number;
  useMobileListOption?: IUseMobileListOption;
}

const ContentItem: React.FC<IContentItem> = ({
  thumbnailHeight,
  infoHeight,
  infoBackgroundColor,
  item,
  borderRadius,
  color,
  fontSize,
  useTitleBoard,
  useSubTitle,
  useInfoAbsolute,
  titleBottomMargin,
  useGradientFilter,
  gradientFilterColor,
  actions,
  useCreatedAt,
  borderColor,
  useShadow,
  useHoverScaleEffect,
  infoPadding,
  thumbnailRadius,
  useMobileListOption,
}) => {
  return (
    <ContentItemWrapper
      thumbnailHeight={thumbnailHeight}
      infoHeight={infoHeight}
      infoBackgroundColor={infoBackgroundColor}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      useTitleBoard={useTitleBoard}
      useInfoAbsolute={useInfoAbsolute}
      titleBottomMargin={titleBottomMargin}
      gradientFilterColor={gradientFilterColor}
      borderColor={borderColor}
      useShadow={useShadow}
      useHoverScaleEffect={useHoverScaleEffect}
      infoPadding={infoPadding}
      useMobileListMode={true}
      thumbnailRadius={thumbnailRadius}
      useMobileListOption={useMobileListOption}
    >
      {item.thumbnail && (
        <div className="thumbnail">
          <img src={item.thumbnail} alt={item.title} />
        </div>
      )}

      <div className="info_box">
        {item.title && <p className="content_title">{item.title}</p>}
        {useSubTitle && <p className="content_subtitle">{item.subTitle}</p>}
        {actions && (
          <div className="actions">
            {actions.map((action: any) => (
              <span>
                {action.icon} {item[action.field]}
                {/* {JSON.stringify(action)} */}
              </span>
            ))}
          </div>
        )}

        {useCreatedAt && (
          <div className="createdAt">
            {dayjs(item.createdAt).format("YYYY년 MM월 DD일 HH:mm")}
          </div>
        )}
      </div>
      {useGradientFilter && <div className="gradient_filter"></div>}
    </ContentItemWrapper>
  );
};

const ContentItemWrapper = styled.div<{
  thumbnailHeight?: number;
  infoHeight?: number;
  infoBackgroundColor?: string;
  borderRadius?: number;
  color?: any;
  fontSize?: any;
  useTitleBoard?: boolean;
  titleBottomMargin?: number;
  gradientFilterColor?: string;
  borderColor?: string;
  useShadow?: boolean;
  useHoverScaleEffect?: boolean;
  useInfoAbsolute?: boolean;
  infoPadding?: number;
  useMobileListMode?: boolean;
  thumbnailRadius?: number;
  useMobileListOption?: IUseMobileListOption;
}>`
  ${(props) =>
    props.useHoverScaleEffect &&
    `:hover {
    .thumbnail {
      img {
        transition: all 0.5s;
        transform: scale(1.1);
      }
    }
  }`}

  width: 100%;
  border-radius: ${(props) => props.borderRadius || 0}px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ${(props) => props.borderColor && `border: 1px solid ${props.borderColor};`}
  .gradient_filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      ${(props) => props.gradientFilterColor || "black"} 0%,
      // rgba(9, 9, 121, 1) 35%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }
  .thumbnail {
    height: ${(props) => props.thumbnailHeight || 100}px;
    overflow: hidden;
    img {
      ${(props) =>
        props.thumbnailRadius && `border-radius:${props.thumbnailRadius}px;`}
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info_box {
    width: 100%;
    padding: ${(props) => props.infoPadding || 15}px;
    height: ${(props) => `${props.infoHeight}px` || "auto"};
    background: ${(props) => props.infoBackgroundColor || "#fff"};
    z-index: 2;
    ${(props) => props.useInfoAbsolute && "position:absolute; bottom:0;left:0;"}
    .content_title {
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      margin-top: 1px;
      max-height: 80px;
      overflow: hidden;
      vertical-align: top;
      text-overflow: ellipsis;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      ${(props) => props.useTitleBoard && "font-weight: 700;"}
      font-size: ${(props) => props.fontSize?.title || 14}px;
      color: ${(props) => props.color?.title || "#1a1a1a"};
      ${(props) =>
        props?.titleBottomMargin &&
        `margin-bottom:${props.titleBottomMargin || 5}px;`}
    }
    .content_subtitle {
      font-size: ${(props) => props.fontSize?.subTitle || "14px"};
      color: ${(props) => props.color?.subTitle || "#1a1a1a"};
    }
  }
  .createdAt {
    font-size: ${(props) => props.fontSize?.createdAt || "14px"};
    color: ${(props) => props.color?.createdAt || "grey"};
  }
  .actions {
    width: 100%;
    font-size: ${(props) => props.fontSize?.actions || "14px"};
    color: ${(props) => props.color?.actions || "grey"};
    span {
      margin-right: 10px;
    }
    svg {
      position: relative;
      top: 2px;
    }
  }

  ${(props) =>
    props.useMobileListMode &&
    `
    display:flex;
    flex-flow: row wrap; 
        
    .thumbnail{width:${
      props?.useMobileListOption?.thumbnailWidth || 30
    }% !important;
    // min-width:120px;   
    height: ${
      props?.useMobileListOption?.thumbnailHeight || props.thumbnailHeight
    }px; 
  } 
    .info_box{width:${
      100 - props?.useMobileListOption?.thumbnailWidth || 30
    }% !important;
    padding:${props?.useMobileListOption?.infoVerticalPadding || 5}px ${
      props?.useMobileListOption?.infoHorizontalPadding || 15
    }px;
    } 
    `}

  @media (min-width: 768px) {
    ${(props) =>
      props.useMobileListMode &&
      ` 
        display:inline-block;
        .thumbnail{width: 100% !important;
      
          height: ${props.thumbnailHeight}px; }  
        .info_box { 
          width:100% !important;   
          
          padding: ${props.infoPadding || 15}px !important; 
        } 
    `}
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }
`;

export default ContentItem;
