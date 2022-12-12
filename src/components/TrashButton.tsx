import { useState } from "react";

import TrashIconHover from "../assets/trash-icon-hover.svg";
import TrashIcon from "../assets/trash-icon.svg";

export function TrashButton(props: any) {
  const [imgSrc, setImgSrc] = useState(TrashIcon);

  function showSecondary() {
    setImgSrc(TrashIconHover);
  }

  function showPrimary() {
    setImgSrc(TrashIcon);
  }

  return (
    <img
      onClick={() => props.onDeleteTask(props.task)}
      src={imgSrc}
      onMouseOver={showSecondary}
      onMouseOut={showPrimary}
    />
  );
}
