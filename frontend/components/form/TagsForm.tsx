import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const TagsFormWrapper = styled.div`
  .site-tag-plus {
    background: #fff;
    border-style: dashed;
  }
  .edit-tag {
    user-select: none;
    background: ;
  }
  .tag-input {
    width: 78px;
    margin-right: 8px;
    vertical-align: top;
    background: #fff;
  }
`;

const TagsForm = ({
  tags,
  handleRemoveTag,
  handleConfirmTag,
  handleEditConfirmTag,
}) => {
  const [inputVisible, setInputVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [editInputIndex, setEditInputIndex] = React.useState(-1);
  const [editInputValue, setEditInputValue] = React.useState("");

  // const handleClose = (removedTag) => {
  //   const ntags = tags.filter((tag) => tag !== removedTag);
  //   setTags(ntags);
  // };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleInputConfirm = () => {
  //   if (inputValue && tags.indexOf(inputValue) === -1) {
  //     setTags([...tags, inputValue]);
  //   }
  //   setInputVisible(false);
  //   setInputValue("");
  // };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  // const handleEditInputConfirm = () => {
  //   const newTags = tags.slice();
  //   newTags[editInputIndex] = editInputValue;
  // setTags(newTags);
  // setEditInputIndex(-1);
  // setEditInputValue("");
  // };

  const saveInputRef = React.useRef(null);
  const saveEditInputRef = React.useRef(null);

  if (!tags) return <></>;

  return (
    <TagsFormWrapper>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={saveEditInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={() => {
                handleEditConfirmTag(editInputIndex, editInputValue, () => {
                  setEditInputIndex(-1);
                  setEditInputValue("");
                });
              }}
              onPressEnter={() => {
                handleEditConfirmTag(editInputIndex, editInputValue, () => {
                  setEditInputIndex(-1);
                  setEditInputValue("");
                });
              }}
            />
          );
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable={true}
            onClose={() => handleRemoveTag(tag)}
            color="blue"
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                // editInput.focus();

                e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={saveInputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => {
            handleConfirmTag(inputValue, () => {
              setInputVisible(false);
              setInputValue("");
            });
          }}
          onPressEnter={() => {
            handleConfirmTag(inputValue, () => {
              setInputVisible(false);
              setInputValue("");
            });
          }}
        />
      )}
      {!inputVisible && (
        <Tag
          className="site-tag-plus"
          onClick={showInput}
          style={{ cursor: "pointer" }}
        >
          <PlusOutlined /> 태그추가
        </Tag>
      )}
    </TagsFormWrapper>
  );
};

export default TagsForm;
