import styled from "styled-components";
import SearchBar, { ISearchBar } from "../search/SearchBar";

interface Props {
  title: string;
  subTitle?: string;
  textAlign?: "left" | "center" | "right";
  backgroundColor?: string;
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  titleFontSize?: number;
  subTitleFontSize?: number;
  titleColor?: string;
  subTitleColor?: string;
  borderColor?: string;
  verticalPadding?: number;
  horizontalPadding?: number;
  titleMarginBottom?: number;
  borderRadius?: number;
  useShadow?: boolean;
  useSearch?: boolean;
  searchBar?: ISearchBar;
}

const PageTitle: React.FC<Props> = ({
  title,
  subTitle,
  textAlign,
  backgroundColor,
  backgroundImage,
  mobileBackgroundImage,
  titleFontSize,
  subTitleFontSize,
  titleColor,
  subTitleColor,
  borderColor,
  verticalPadding,
  horizontalPadding,
  titleMarginBottom,
  borderRadius,
  useShadow,
  useSearch,
  searchBar,
}) => {
  return (
    <PageTitleWrapper
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      mobileBackgroundImage={mobileBackgroundImage}
      titleFontSize={titleFontSize}
      subTitleFontSize={subTitleFontSize}
      titleColor={titleColor}
      subTitleColor={subTitleColor}
      borderColor={borderColor}
      textAlign={textAlign}
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
      titleMarginBottom={titleMarginBottom}
      borderRadius={borderRadius}
      useShadow={useShadow}
      // useSearch={useSearch}
    >
      {backgroundImage && <div className="black_filter"></div>}
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      {useSearch && (
        <div className="search">
          <SearchBar {...searchBar} />
        </div>
      )}
    </PageTitleWrapper>
  );
};

const PageTitleWrapper = styled.div<{
  backgroundColor: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
  titleFontSize: number;
  subTitleFontSize: number;
  titleColor: string;
  subTitleColor: string;
  borderColor: string;
  textAlign: string;
  verticalPadding: number;
  horizontalPadding: number;
  titleMarginBottom: number;
  borderRadius: number;
  useShadow: boolean;
}>`
  width: 100%;
  position: relative;
  .black_filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  ${(props) => props.useShadow && `box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);`}
  background: ${(props) =>
    props.mobileBackgroundImage
      ? `url(${props.mobileBackgroundImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
      `
      : props.backgroundColor || "#fff"};

  ${(props) =>
    props.borderRadius && `border-radius: ${props.borderRadius || 0}px;`}
  ${(props) => props.borderColor && `border: 1px solid ${props.borderColor};`}
  padding: ${(props) =>
    `${props.verticalPadding * 0.8 || 20}px ${
      props.horizontalPadding * 0.8 || 10
    }px;`}
  h1 {
    color: ${(props) => props.titleColor || "1a1a1a"};
    font-size: ${(props) => props.titleFontSize * 0.8 || 24}px;
    text-align: ${(props) => props.textAlign || "left"};
    font-weight: 700;
    line-height: 1;
    margin-bottom: ${(props) => props.titleMarginBottom * 0.8 || 20}px;
    position: relative;
    z-index: 1;
  }
  h2 {
    color: ${(props) => props.subTitleColor || "grey"};
    font-size: ${(props) => props.subTitleFontSize * 0.8 || 18}px;
    text-align: ${(props) => props.textAlign || "left"};
    line-height: 1;
    position: relative;
    z-index: 1;
  }

  .search {
    margin-top: 15px;
  }
  @media (min-width: 768px) {
    background: ${(props) =>
      props.backgroundImage
        ? `url(${props.backgroundImage});
      background-size: cover;
        background-position: center;
        background-repeat: no-repeat  
      `
        : props.backgroundColor || "#fff"};
    .search {
      position: absolute;
      right: 0;
      bottom: ${(props) => props.verticalPadding || 10}px;
      right: ${(props) => props.horizontalPadding || 10}px;
    }
  }
  @media (min-width: 992px) {
    padding: ${(props) =>
        `${props.verticalPadding || 20}px ${props.horizontalPadding || 10}px;`}
      h1 {
      font-size: ${(props) => props.titleFontSize || 24}px;
      margin-bottom: ${(props) => props.titleMarginBottom || 20}px;
    }
    h2 {
      font-size: ${(props) => props.subTitleFontSize || 24}px;
    }
  }
`;

export default PageTitle;
