import React from "react";
//import ReactDOM from 'react-dom';
import styled from "styled-components";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Modal } from "antd";
import { BsAspectRatio } from "react-icons/bs";
import useMeasure from "react-use-measure";
import { CircularProgress } from "@material-ui/core";
// import DataLoading from "./tools/DataLoading";
//import { fetcher } from 'globalFunction';
const PopupStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  .cropWrap {
    width: 50%;
  }
  .ratio_box {
    width: 50%;
    padding: 30px;
    .ratio_btn {
      transition: all 0.2s;
      width: 100%;
      line-height: 40px;
      background: grey;
      position: relative;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      background: #00aaff;
      color: #fff;
      margin-bottom: 15px;
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
      .icon {
        position: absolute;
        left: 15px;
        top: 5px;
        color: #fff;
      }
    }
    // .img-preview {
    //   border: 1px solid lightgrey;
    //   overflow: hidden;
    // }
  }
  .loading {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const PopupBox = ({ item, popupOpenHandle, open, setImageUrl }) => {
  const cropperRef = React.useRef<HTMLImageElement>(null);
  // const [cropData, setCropData] = React.useState("#");
  const [cropper, setCropper] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [aspectRatio, setAspectRatio2] = React.useState(0);
  const [widgetRef, bounds] = useMeasure();

  // const onCrop = () => {
  //   const imageElement: any = cropperRef?.current;
  //   const cropper: any = imageElement?.cropper;
  //   cropper.getCroppedCanvas().toDataURL();
  //   console.log(cropper.getCroppedCanvas().toDataURL());
  // };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
    return () => {};
  }, []);

  React.useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, [aspectRatio]);

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      // setCropData(cropper.getCroppedCanvas().toDataURL());
      // console.log(cropper.getCroppedCanvas().toDataURL());
      setImageUrl(cropper.getCroppedCanvas().toDataURL());
      popupOpenHandle();
    }
  };
  return (
    <Modal
      title="Basic Modal"
      visible={open}
      onOk={() => {
        getCropData();
      }}
      onCancel={popupOpenHandle}
      width={"100%"}
      cancelText={"취소"}
      okText={"자르기"}
    >
      <PopupStyle>
        {loading ? (
          <div className="cropWrap" ref={widgetRef}>
            <Cropper
              src={item.webformatURL}
              style={{ height: "60vh", width: "100%" }}
              background={false}
              // initialAspectRatio={1}
              aspectRatio={aspectRatio}
              guides={true}
              // crop={onCrop}
              ref={cropperRef}
              responsive={true}
              preview=".img-preview"
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              autoCropArea={1}
              checkOrientation={false}
              viewMode={1}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />
            {/* <a className="cropBtn" onClick={getCropData}>
                  자르기
                </a> */}
          </div>
        ) : (
          <div
            className="cropWrap loading"
            style={{
              width: bounds.width,
              height: bounds.height,
            }}
          >
            <CircularProgress />
          </div>
        )}
        {/* <div className="box" style={{ width: "50%" }}>
            <h1>Preview</h1>
            <div
              className="img-preview"
              style={{ width: "100%", height: 200 }}
            />
          </div> */}
        {/* <div className="box" style={{ width: "50%", height: 200 }}>
                <h1>
                  <span>Crop</span>
                </h1>
                {cropData != "#" && (
                  <img style={{ width: "100%" }} src={cropData} alt="cropped" />
                )}
              </div>  */}
        {/* <div className="selectCropRate">
            <a onClick={() => rateHandle(9, 9)}>9 : 9</a>
            <a onClick={() => rateHandle(9, 16)}>9 : 16</a>
            <a onClick={() => rateHandle(9, 24)}>9 : 24</a>
          </div> */}
        {/* <img src={item.webformatURL} alt="" /> */}

        {/* <canvas ref={canvasRef} width={600} height={600} className="canvas"/> */}
        <div className="ratio_box">
          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(1);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            1 : 1
          </div>

          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(1 / 2);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            1 : 2
          </div>
          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(2 / 1);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            2 : 1
          </div>
          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(3 / 4);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            3 : 4
          </div>
          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(4 / 3);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            4 : 3
          </div>

          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(9 / 16);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            9 : 16
          </div>

          <div
            className="ratio_btn"
            onClick={() => {
              setAspectRatio2(16 / 9);
            }}
          >
            <span className="icon">
              <BsAspectRatio size={20} />
            </span>
            16 : 9
          </div>
        </div>
      </PopupStyle>
    </Modal>
  );
};
export default PopupBox;
