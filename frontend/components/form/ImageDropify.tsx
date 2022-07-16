import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { ImImage } from "react-icons/im";

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  height: "190px",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const ImageDropify = ({
  fieldTitle,
  files,
  setFiles,
  preview,
  setImageUrl,
}: any) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("acceptedFiles", acceptedFiles);
    // Do something with the files
    setFiles(
      acceptedFiles.map((file: any) => {
        setImageUrl(URL.createObjectURL(file));
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      })
    );
  }, []);

  const thumbs = files.map((file: any) => (
    <div
      key={file.name}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="h_dynamic_media_form">
      <h3 className="field_title">{fieldTitle}</h3>
      <div className="image-droppify" {...getRootProps()}>
        <input {...getInputProps()} />

        {preview ? (
          <>{files.length > 0 && thumbs}</>
        ) : (
          <>
            {files.length ? (
              thumbs
            ) : (
              <p className="droppify-inner">
                <ImImage size={30} />
                <br />
                파일을 올려놓거나 클릭해 주세요.
              </p>
            )}
          </>
        )}

        {preview && files.length === 0 && (
          <div
            key={11}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={thumbInner}>
              <img src={preview} style={img} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageDropify;
