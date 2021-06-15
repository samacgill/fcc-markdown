import React from "react";
import { Icon } from "semantic-ui-react";

export default function HeaderBar(props) {
  const handleClick = () => {
    props.toggle();
  };
  return (
    <div className="header-bar">
      {props.title}
      <Icon
        name={props.max ? "compress" : "expand"}
        size="large"
        onClick={handleClick}
      />
    </div>
  );
}
