import { getMediaType } from "globalFunction";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

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

const SingleMediaForm = ({
  fieldTitle,
  files,
  setFiles,
  preview,
  isVideo,
}: any) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("acceptedFiles", acceptedFiles);
    // Do something with the files
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
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
        {/* {JSON.stringify(file.type)} */}
        {isVideo ? (
          <video src={file.preview} style={img} />
        ) : (
          <>
            {file.type.includes("video") ? (
              <video src={file.preview} style={img} />
            ) : (
              <img src={file.preview} style={img} />
            )}
          </>
        )}
      </div>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="h_dynamic_media_form">
      <h3 className="field_title">{fieldTitle}</h3>
      <div
        style={{
          width: "100%",
          height: "200px",
          border: "1px solid grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          cursor: "pointer",
          overflow: "hidden",
        }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        {preview ? (
          <>{files.length > 0 && thumbs}</>
        ) : (
          <>{files.length ? thumbs : <p>파일을 올려놓거나 클릭해 주세요.</p>}</>
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
              {isVideo ? (
                <video src={preview} style={img} />
              ) : (
                <>
                  {getMediaType(preview.split(".").reverse()[0]) === 1 ? (
                    <video src={preview} style={img} />
                  ) : (
                    <img src={preview} style={img} />
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleMediaForm;
