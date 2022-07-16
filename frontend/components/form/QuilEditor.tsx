import React from "react";
import "react-quill/dist/quill.snow.css";
import * as Emoji from "quill-emoji";
import ReactQuill, { Quill } from "react-quill";

var SizeStyle = Quill.import("attributors/style/size");
SizeStyle.whitelist = [
  "8pt",
  "9pt",
  "10pt",
  "11pt",
  "12pt",
  "14pt",
  "16pt",
  "18pt",
  "20pt",
  "22pt",
  "24pt",
  "26pt",
  "28pt",
];

Quill.register("modules/emoji", Emoji);
Quill.register(SizeStyle, true);

// function insertHeart() {
//   console.log('THIS-QUILL', this.quill);
//   const cursorPosition = this.quill.getSelection().index;
//   this.quill.insertText(cursorPosition, '♥');
//   this.quill.setSelection(cursorPosition + 1);
// }

const CustomToolbar = () => (
  <div id="toolbar">
    {/* <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select> */}
    <select className="ql-size">
      <option value="8pt" style={{ fontSize: "8pt" }}>
        8pt
      </option>
      <option value="10pt" style={{ fontSize: "10pt" }}>
        10pt
      </option>
      <option value="12pt" style={{ fontSize: "12pt" }}>
        12pt
      </option>
      <option value="14pt" style={{ fontSize: "14pt" }}>
        14pt
      </option>
      <option value="16pt" style={{ fontSize: "16pt" }}>
        16pt
      </option>
      <option value="18pt" style={{ fontSize: "18pt" }}>
        18pt
      </option>
      <option value="20pt" style={{ fontSize: "20pt" }}>
        20pt
      </option>
      <option value="22pt" style={{ fontSize: "22pt" }}>
        22pt
      </option>
      <option value="24pt" style={{ fontSize: "24pt" }}>
        24pt
      </option>
      <option value="26pt" style={{ fontSize: "26pt" }}>
        26pt
      </option>
      <option value="28pt" style={{ fontSize: "28pt" }}>
        28pt
      </option>
    </select>

    <button className="ql-underline" />
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-image" />
    <button className="ql-video" />

    <button className="ql-clean" />
    <button className="ql-emoji" />
  </div>
);

const Editor2 = ({ val, setVal }: any) => {
  const handleChange = (html: any) => {
    setVal(html);
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
      // handlers: {
      //   insertHeart: insertHeart,
      // },
    },
    "emoji-toolbar": true,
    "emoji-textarea": true,
    "emoji-shortname": true,
  };

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill value={val || ""} onChange={handleChange} modules={modules} />
    </div>
  );
};

export default Editor2;
