import React from "react";
import HeaderBar from "./HeaderBar";

export default function Editor(props) {
  const handleChange = (e) => {
    props.onEdit(e.target.value);
  };

  return (
    <div className={`container ${props.max && "maximised"}`}>
      <HeaderBar title="Editor" toggle={props.toggleEditor} max={props.max} />
      <textarea
        id="editor"
        rows={props.noRows}
        onChange={handleChange}
        value={props.value}
      >
        {props.content}
      </textarea>
    </div>
  );
}
