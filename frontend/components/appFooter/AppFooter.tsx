import React from "react";
import styled from "styled-components";

interface Metadata {
  companyName: string; // 회사명
  companyAddress: string; // 주소
  companyTel: string; // 고객센터 전화번호
  businessNumber: string; // 사업자번호
  companyOwner: string; // 대표자명
  companyEmail: string; // 이메일
  mailOrderBusinessReportNumber?: string; // 통신판매업 신고번호
  useSitemap?: boolean;
  isWide?: boolean;
}

interface Props {
  theme?: "theme1" | "theme2";
  backgroundColor?: string;
  textColor?: string;
  textMuteColor?: string;
  borderColor?: string;
  logoURL: string;
  logoSize?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  metadata: Metadata;
  logoMarginLeft?: number;
  infoAlign?: "left" | "center" | "right";
  useSitemap?: boolean;
  isWide?: boolean;
}

const AppFooter: React.FC<Props> = ({
  // theme,
  backgroundColor,
  textColor,
  textMuteColor,
  borderColor,
  logoURL,
  logoSize,
  verticalPadding,
  metadata,
  logoMarginLeft,
  infoAlign,
  useSitemap,
  isWide,
  horizontalPadding,
}) => {
  // const headerActive = isActive || scrollY > 50;

  return (
    <AppFooterWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      textMuteColor={textMuteColor}
      borderColor={borderColor}
      logoSize={logoSize}
      verticalPadding={verticalPadding}
      logoMarginLeft={logoMarginLeft}
      infoAlign={infoAlign}
      horizontalPadding={horizontalPadding}
    >
      {useSitemap && (
        <div className={isWide ? "no_inner pc" : "inner pc"}>
          <div className="footer_flex">
            <div className="footer_section large_section">
              <div className="footer_section_title">고객센터</div>
              <p className="footer_text">
                10:30~18:00 (점심시간 13:00~14:00)
                <br />
                주말, 공휴일 휴무
              </p>
              <a className="footer_btn">1:1 문의</a>
            </div>
            <div className="footer_section">
              <div className="footer_section_title">큐브린</div>
              <ul className="footer_menu_list">
                <li>
                  <a href="#">큐브린 메인</a>
                </li>
                <li>
                  <a href="#">큐브린 메뉴1</a>
                </li>
                <li>
                  <a href="#">큐브린 메뉴2</a>
                </li>
                <li>
                  <a href="#">큐브린 메뉴3</a>
                </li>
              </ul>
            </div>

            <div className="footer_section">
              <div className="footer_section_title">큐브린 정보</div>
              <ul className="footer_menu_list">
                <li>
                  <a href="#">서비스 소개</a>
                </li>
                <li>
                  <a href="#">인재영입</a>
                </li>
              </ul>
            </div>

            <div className="footer_section">
              <div className="footer_section_title">관련 사이트</div>
              <ul className="footer_menu_list">
                <li>
                  <a href="#">큐브린 블로그</a>
                </li>
                <li>
                  <a href="#">큐브린 인스타그램</a>
                </li>
                <li>
                  <a href="#">큐브린 유튜브</a>
                </li>
              </ul>
            </div>
            <div className="footer_section">
              <div className="footer_section_title">지원</div>
              <ul className="footer_menu_list">
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">자주묻는질문</a>
                </li>
                <li>
                  <a href="/terms">이용약관</a>
                </li>
                <li>
                  <a href="#">
                    <b>개인정보처리방침</b>
                  </a>
                </li>
                <li>
                  <a href="#">전문가센터</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {useSitemap && <div className="devider pc" />}

      <div className={isWide ? "no_inner" : "inner"}>
        {logoURL && (
          <div className="logo_area">
            <img className="page_logo" src={logoURL} alt="page-logo" />
          </div>
        )}

        <p className="footer_info">
          {!useSitemap && (
            <ul className="links">
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">
                  <b>개인정보처리방침</b>
                </a>
              </li>
              <li>
                <a href="#">환불정책</a>
              </li>
              <li>
                <a href="#">공지사항</a>
              </li>
            </ul>
          )}
          {metadata.companyName}
          <InfoDevider />
          {metadata.companyAddress}
          <InfoDevider />
          대표: {metadata.companyOwner}
          <InfoDevider />
          사업자등록번호 : {metadata.businessNumber}
          <InfoDevider />
          {metadata.mailOrderBusinessReportNumber && (
            <>
              통신판매업신고번호 :{metadata.mailOrderBusinessReportNumber}
              <InfoDevider />
            </>
          )}
          고객센터 : {metadata.companyTel}
          <InfoDevider />
          {metadata.companyEmail}
        </p>
        <p className="copyright">
          Copyright © 2022 Cubelean Inc. All rights reserved.
        </p>
      </div>
    </AppFooterWrapper>
  );
};

const InfoDevider = () => {
  return <span className="info_devider">|</span>;
};

const AppFooterWrapper = styled.div<{
  backgroundColor;
  textColor;
  textMuteColor;
  borderColor;
  logoSize;
  verticalPadding;
  logoMarginLeft;
  infoAlign;
  horizontalPadding;
}>`
  width: 100%;
  height: auto;
  background: ${(props) => props.backgroundColor};
  padding: ${(props) => props.verticalPadding}px 30px;
  color: ${(props) => props.textColor || "#fff"};
  border-top: 1px solid ${(props) => props.borderColor || "#1a1a1a"};

  .inner,
  .no_inner {
    padding: 0 ${(props) => props.horizontalPadding || 0}px;
  }

  .devider {
    width: 100%;
    height: 1px;
    background: ${(props) => props.borderColor || "lightgrey"};
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .info_devider {
    display: inline-block;
    margin: 0 10px;
  }
  .copyright {
    margin-top: 10px;
    color: ${(props) => props.textMuteColor || "grey"};
  }
  .logo_area {
    margin-left: ${(props) => props.logoMarginLeft || 0}px;
    .page_logo {
      height: ${(props) => props.logoSize || 30}px;
    }
  }
  .footer_info {
    font-size: 14px;
    text-align: ${(props) => props.infoAlign || "left"};
  }
  .copyright {
    font-size: 14px;
    text-align: ${(props) => props.infoAlign || "left"};
  }
  .footer_flex {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    .footer_section {
      width: 18%;
      .footer_section_title {
        font-weight: 700;
        margin-bottom: 20px;
      }
      .footer_text {
        color: ${(props) => props.textMuteColor || "lightgrey"};
        margin-bottom: 20px;
        font-size: 14px;
      }
      .footer_btn {
        display: inline-block;
        padding: 10px 12px;
        font-size: 15px;
        border-radius: 6px;
        font-weight: 700;
        border: 1px solid ${(props) => props.textColor || "#1a1a1a"};
        color: ${(props) => props.textColor || "#1a1a1a"};
      }
      .footer_menu_list {
        li {
          height: 35px;
          a {
            font-size: 15px;
            color: ${(props) => props.textColor || "#1a1a1a"};
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .large_section {
      width: 28%;
    }
  }

  .links {
    width: 100%;
    margin-bottom: 20px;
    li {
      display: inline-block;
      a {
        display: inline-block;
        padding: 0 10px;
        color: ${(props) => props.textColor || "#1a1a1a"};
      }
    }
    li:first-child {
      a {
        padding-left: 0;
      }
    }
    li:last-child {
      a {
        padding-right: 0;
      }
    }
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .pc {
      display: flex !important;
    }
    padding: ${(props) => props.verticalPadding}px 0;
    .main_nav_area {
      display: flex !important;
    }
  }
  @media (min-width: 1200px) {
  }
`;

export default AppFooter;
