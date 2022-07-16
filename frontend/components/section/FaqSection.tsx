import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface IFaq {
  id: number;
  title: string;
  content: string;
}

interface Props {
  sectionTitle: string;
  datas: IFaq[];
  sectionTitleColor?: string;
  backgroundColor?: string;
  itemBorderWeight?: number;
  itemBorderRadius?: number;
  itemBorderColor?: string;
  itemColor?: string;
  childBackgroundColor?: string;
  childColor?: string;
  verticalPadding?: number;
  horizontalPadding?: number;
}

const FaqSection: React.FC<Props> = ({
  sectionTitle,
  datas,
  sectionTitleColor,
  backgroundColor,
  itemBorderWeight,
  itemBorderRadius,
  itemBorderColor,
  itemColor,
  childBackgroundColor,
  childColor,
  verticalPadding,
  horizontalPadding,
}) => {
  return (
    <SectionWrapper
      backgroundColor={backgroundColor}
      sectionTitleColor={sectionTitleColor}
      itemBorderWeight={itemBorderWeight}
      itemBorderRadius={itemBorderRadius}
      itemBorderColor={itemBorderColor}
      itemColor={itemColor}
      childBackgroundColor={childBackgroundColor}
      childColor={childColor}
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
    >
      <div className="section_title">
        <h2>{sectionTitle ?? "FAQ"}</h2>
      </div>
      {datas.map((item, index) => (
        <FaqItem
          key={item.id}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </SectionWrapper>
  );
};

const FaqItem = ({ title, content, index }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {index !== 0 && <div style={{ width: "100%", marginTop: 15 }}></div>}
      <div className="faq_item">
        <div
          className="q"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="q_title">Q. {title}</div>

          <div className="arrow">
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
        </div>
        {open && (
          <div
            className="a"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
      </div>
    </>
  );
};

const SectionWrapper = styled.div<{
  sectionTitleColor?: string;
  backgroundColor?: string;
  itemBorderWeight?: number;
  itemBorderRadius?: number;
  itemBorderColor?: string;
  itemColor?: string;
  childBackgroundColor?: string;
  childColor?: string;
  verticalPadding?: number;
  horizontalPadding?: number;
}>`
  ${(props) => ` 
  
  margin-top:60px;
  width: 100%;  
  padding: ${props.verticalPadding || 80}px ${
    props.horizontalPadding || 15
  }px;  
  
  background: ${props.backgroundColor || "#fff"};
  .section_title{ 
    text-align: center;
    margin-bottom:50px;
    h2{
      font-family: "Anton", sans-serif !important;
      font-size: 40px; 
      letter-spacing: 5px; 
      color: ${props.sectionTitleColor || "#1a1a1a"}; 
    } 
  }


  .faq_item{
      width: 100%;
      padding: 0 15px;
      max-width: 1100px;
      margin: 0 auto;
      
      .q {
        width: 100%;
        padding: 15px;
        border: ${props.itemBorderWeight || 1}px solid ${
    props.itemBorderColor || "#1a1a1a"
  }; 
  border-radius: ${props.itemBorderRadius ?? 5}px; 
        position: relative;
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        cursor: pointer;
        .q_title {
          width: 93%; 
          padding-top: 5px;
          color: ${props.itemColor || "#1a1a1a"}; 
          letter-spacing: 0.2px;
        }
        .arrow {
          width: 7%;
          height: 100%;
          text-align: center;
          position: relative;
          top: 4px;
          svg {
            font-size: 30px;
            color: ${props.itemColor || "#1a1a1a"}; 
          }
        }
      }
      .a {
        width: 100%;
        padding: 30px 20px;
        background: ${props.childBackgroundColor || "#ededed"}; 
        color: ${props.childColor || "#1a1a1a"}; 
        line-height: 1.7;
        letter-spacing: 0.2px;
        border-radius: 0 0 ${props.itemBorderRadius ?? 5}px ${
    props.itemBorderRadius ?? 5
  }px;
      }
  }

   
  @media (min-width: 768px){

  .faq_item{
      .q {
        padding: 15px;
        .q_title {
          width: 93%; 
          padding-top: 3px;
          letter-spacing: 0.2px;
          font-size: 16px;
        }
        .arrow {
          width: 7%;
          top: 4px;
          svg {
            font-size: 30px; 
            color: #fff;
          }
        }
      }
      .a {
        padding: 30px 20px;
        line-height: 1.7;
        letter-spacing: 0.2px;
        font-size: 16px;
      }
  }

  }
  @media (min-width: 992px){
    .section_title{
      h2{
        font-size: 70px !important;
      }
    }

    .faq_item{
      .q {
        padding: 15px;
        .q_title {
          padding-top: 2px;
          letter-spacing: 0.2px;
          font-size: 17px;
        }
        .arrow {
          width: 7%;
          top: 4px;
          svg {
            font-size: 30px; 
            color: #fff;
          }
        }
      }
      .a {
        padding: 30px 40px;
        line-height: 1.7;
        letter-spacing: 0.2px;
        font-size: 17px; 
        
      }
  }

  }
  @media (min-width: 1200px){}

  `}
`;

export default FaqSection;
