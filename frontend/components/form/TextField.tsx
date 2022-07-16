import React from "react";
import styled from "styled-components";

interface Props {
  value: any;
  setValue: any;
  placeholder: string;
  backgroundColor: string;
  color: string;
}

const TextField: React.FC<Props> = ({ value, setValue, placeholder }) => {
  return (
    <TextFieldWrapper>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
    </TextFieldWrapper>
  );
};

const TextFieldWrapper = styled.div<{}>`
  width: 100%;
  input {
    padding: 0;
    border: 1px solid red;
    padding: 10px;
  }
`;

export default TextField;
