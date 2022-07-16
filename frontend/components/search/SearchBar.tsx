import styled from "styled-components";
import { Select } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SearchBarWrapper = styled.div<{
  buttonBackground: string;
  buttonTextColor: string;
}>`
  ${(props) => ` 
  width: 100%;
  height: 40px;
  padding:0 !important;
  position:relative;
  
  .no_mobile{
    display:none; 
  }
  .ant-select{height:100%;
    position:relative;
    top:-4.5px;
    margin-right:10px;
  .ant-select-selector{height:100%;}}
  input {
    width:100%; 
    border: 1px solid lightgrey;
    height: 100%;
    // padding: 15px;
    padding-left:65px;
    
  }
  button {
    width: 80px;
    height: 100%;
    background: ${props.buttonBackground || "#1a1a1a"}; 
    color: ${props.buttonTextColor || "#fff"};
  } 
  .mobile_search_select{
    width:60px;
    position:absolute;
    left:0;
    height:100%;
    border:none;
    background:none;
    text-align:center;
  }
  .mobile_search_submit{
    position:absolute;
    right:10px;
    top:1px;
    font-size:25px;
    color:${props.buttonBackground || "#1a1a1a"};
  }
  @media (min-width: 768px) {
    .no_mobile{
      display:inline-block;  
    }
    .only_mobile{
      display:none; 
    }
    input {
      width:300px;
      padding: 15px;
    }
  }
`}
`;

export interface ISearchBar {
  placeholder?: string;
  buttonTextColor?: string;
  buttonBackground?: string;
  onSubmit?: any;
  useFilter?: boolean;
}

const SearchBar: React.FC<ISearchBar> = ({
  placeholder,
  buttonBackground,
  buttonTextColor,
  onSubmit,
  useFilter,
}) => {
  return (
    <SearchBarWrapper
      buttonBackground={buttonBackground}
      buttonTextColor={buttonTextColor}
    >
      <Select
        className="no_mobile"
        defaultValue="제목"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="제목">제목</Option>
        <Option value="내용">내용</Option>
      </Select>
      <select className="mobile_search_select only_mobile">
        <option value={"제목"}>제목</option>
        <option value={"내용"}>내용</option>
      </select>
      <input
        placeholder={placeholder || "검색어를 입력해주세요."}
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <button onClick={onSubmit} className="no_mobile">
        검색
      </button>
      <span onClick={onSubmit} className="only_mobile mobile_search_submit">
        <AiOutlineSearch />
      </span>
    </SearchBarWrapper>
  );
};

export default SearchBar;
