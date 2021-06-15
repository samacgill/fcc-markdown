import React from "react";
import HeaderBar from "./HeaderBar";

export default function Preview(props) {
  return (
    <div className={`container ${props.max && "maximised"}`}>
      <HeaderBar title="Preview" toggle={props.togglePreview} />
      <div
        id="preview"
        rows={props.noRows}
        dangerouslySetInnerHTML={props.content()}
      ></div>
    </div>
  );
}
