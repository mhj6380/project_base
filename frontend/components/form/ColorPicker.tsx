// import { FieldTitle } from "components/styled/dashboard";
import React from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';

const ColorPickerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  height: auto;
  .picker_box {
    z-index: 99;
    position: absolute;
  }
  .field-title {
    width: 100%;
    font-size: 16px;
  }
  .preview_left {
    width: 50px;
    .bg_preview_box {
      width: 35px;
      height: 35px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid lightgrey;
    }
  }
  .preview_right {
    width: calc(100% - 50px);
    .color_value {
      width: 100%;
      line-height: 35px;
      padding-left: 15px;
      border: none;
      box-shadow: none;
      border-radius: 5px;
      background: #ededed;
      color: grey;
      position: relative;
      top: 3px;
    }
  }
`;

const ColorPicker = (props) => {
  const { fieldTitle, val, setVal } = props;
  const [open, setOpen] = React.useState(false);
  const handleSetChange = (color) => {
    setVal(color.hex);
  };

  const pickerRef = React.useRef(null);

  const useOutsideAlerter = (ref) => {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(pickerRef);

  const handleSetOpen = () => {
    setOpen(true);
  };

  return (
    <ColorPickerWrapper>
      {/* <h3>{fieldTitle}</h3> */}
      {fieldTitle && (
        <div className="field-title">
          {/* <FieldTitle marginTop={15} marginBottom={10}>
            {fieldTitle}
          </FieldTitle> */}
          {fieldTitle}
        </div>
      )}
      <div className="preview_left">
        <div
          className="bg_preview_box"
          onClick={handleSetOpen}
          style={{ background: val }}
        ></div>
      </div>
      <div className="preview_right">
        <input className="color_value" type="text" value={val} readOnly />
      </div>

      {open && (
        <div ref={pickerRef} className="picker_box">
          <SketchPicker color={val} onChangeComplete={handleSetChange} />
        </div>
      )}
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
