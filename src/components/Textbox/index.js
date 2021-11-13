import React from "react";
import "./styles.less";

const TextBox = ({ joke, img }) => {
  return (
    <div className="textbox">
      <div className="textbox__img">{img}</div>
      <p className="textbox__joke">{joke}</p>
    </div>
  );
};
export default TextBox;
