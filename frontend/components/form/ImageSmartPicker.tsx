import { Input, Modal, Tabs } from "antd";
import Search from "antd/lib/input/Search";
import { defaultImage } from "config";
import { base64ImageUpload } from "globalFunction";
import React from "react";
import { ImImage } from "react-icons/im";
import Gallery from "react-photo-gallery";
import styled from "styled-components";
import customAxios from "util/axios";
import CropDialog from "./CropDialog";
// import GalleryWidget from "./pixa/GalleryWidget";

import ImageDropify from "./ImageDropify";

const ImagePickerWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-flow: row wrap;
  background: #ededed;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  .display_preview {
    height: 80%;
  }
  .no_image_ment {
    color: grey;
    text-align: center;
  }
`;

const IconListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-height: 65vh;
  overflow-y: scroll;
  .tabs {
    width: calc(100% - 300px);
    padding-right: 15px;
  }
  .preview {
    width: 300px;
    height: 65vh;
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
`;

interface Props {
  val: string;
  setVal: any;
}

const ImagePicker: React.FC<Props> = ({ val, setVal }) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [imageUrl, setImageUrl]: any = React.useState("");

  const handleSubmit = async () => {
    if (!imageUrl) return;
    if (imageUrl.includes("base64")) {
      // pixabay Crop 이미지인경우
      const result = await base64ImageUpload(imageUrl);
      setVal(result);
    } else if (imageUrl.includes("blob")) {
      // Image Dropify인 경우
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = async function () {
        const dataURL = reader.result;
        const result = await base64ImageUpload(dataURL);
        setVal(result);
      }; // data url!
    } else {
      // URL
      setVal(imageUrl);
    }

    setFiles([]);
    setImageUrl("");
    setOpen(false);
  };

  return (
    <>
      {/* <GalleryWidget items={items} /> */}

      <Modal
        title="Image Picker"
        visible={open}
        width={"80%"}
        onOk={handleSubmit}
        onCancel={() => {
          setOpen(false);
        }}
        cancelText={"취소"}
        okText={"등록하기"}
      >
        <IconListWrapper>
          <div className="tabs">
            <Tabs defaultActiveKey="1" centered style={{ width: "100%" }}>
              <Tabs.TabPane tab="업로드" key="1">
                <ImageDropify
                  files={files}
                  setFiles={setFiles}
                  setImageUrl={setImageUrl}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="픽사베이" key="2">
                <PixabayForm setImageUrl={setImageUrl} />
              </Tabs.TabPane>
              <Tabs.TabPane tab="URL" key="3">
                <ImageUrlForm setImageUrl={setImageUrl} />
              </Tabs.TabPane>
            </Tabs>
          </div>
          <div className="preview">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="preview"
                onError={(e: any) => {
                  e.target.src = defaultImage;
                }}
              />
            )}
          </div>
        </IconListWrapper>
      </Modal>
      <ImagePickerWrapper
        onClick={() => {
          setOpen(true);
        }}
      >
        {val ? (
          <img className="display_preview" src={val} alt="image" />
        ) : (
          <div className="no_image_ment">
            <ImImage size={30} />
            <br />
            이곳을 클릭하여 이미지를 등록해주세요.
          </div>
        )}
      </ImagePickerWrapper>
    </>
  );
};

const PixabayForm = ({ setImageUrl }) => {
  const pixbayKey = "24070790-2b3f6a587f470abbf40d40b1f";

  let info = {
    index: 1,
    webformatURL: "",
  };

  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState(info);

  const [loading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  const popupOpenHandle = () => {
    setOpen(!open);
    return false;
  };

  const submitHandle = (val) => {
    if (!val) return alert("검색어를 입력해주세요.");
    setLoading(true);
    const apiUrl = `https://pixabay.com/api/?key=${pixbayKey}&q=${val}&image_type=photo&per_page=50`;
    customAxios.get(apiUrl).then((res) => {
      setImages(
        res.data.hits.map((item) => {
          return {
            src: item.webformatURL,
            width: item.imageWidth,
            height: item.imageHeight,
          };
        })
      );
      setLoading(false);
      setSubmitted(true);
    });
  };

  const handleOpenCrop = React.useCallback((_, { photo, index }) => {
    setBody({
      index,
      webformatURL: photo.src,
    });
    setOpen(!open);
  }, []);
  return (
    <div>
      <CropDialog
        item={body}
        popupOpenHandle={popupOpenHandle}
        open={open}
        setImageUrl={setImageUrl}
      />
      <div className="searchBox">
        <Search
          placeholder="검색어를 입력해주세요."
          size="large"
          enterButton
          onSearch={submitHandle}
        />
      </div>
      {submitted && images.length === 0 && (
        <div className="no-data">
          검색된 이미지가 없습니다. 다른 키워드를 입력해보세요!
        </div>
      )}

      {!loading && (
        <>
          {images ? (
            <Gallery photos={images} onClick={handleOpenCrop} />
          ) : (
            <div>Loading..</div>
          )}
        </>
      )}
    </div>
  );
};

const ImageUrlForm = ({ setImageUrl }) => {
  return (
    <div>
      <Input
        placeholder="https://"
        size="large"
        onChange={(e) => setImageUrl(e.target.value)}
      />
    </div>
  );
};

export default ImagePicker;
