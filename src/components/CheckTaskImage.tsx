import { useEffect, useState } from "react";

import CheckIcon from "../assets/check-icon.svg";
import CheckIconHover from "../assets/check-icon-hover.svg";
import CheckedIcon from "../assets/checked-icon.svg";
import CheckedIconHover from "../assets/checked-icon-hover.svg";

interface handleTaskCompleteProps {
  task: string;
  isTaskDone: boolean;
}

interface CheckTaskImageProps {
  isTaskDone: boolean;
  thisTask: {
    task: string;
  };
  onHandleTaskComplete: (currentTask: string) => void;
}

export function CheckTaskImage({
  isTaskDone,
  thisTask,
  onHandleTaskComplete,
}: CheckTaskImageProps) {
  const [imgSrc, setImgSrc] = useState(CheckIcon);

  useEffect(() => {
    if (isTaskDone) {
      setImgSrc(CheckedIcon);
    } else {
      setImgSrc(CheckIcon);
    }
  }, [isTaskDone]);

  function handleOnMouseOver() {
    if (!isTaskDone) {
      setImgSrc(CheckIconHover);
    } else {
      setImgSrc(CheckedIconHover);
    }
  }

  function handleOnMouseOut() {
    if (!isTaskDone) {
      setImgSrc(CheckIcon);
    } else {
      setImgSrc(CheckedIcon);
    }
  }

  return (
    <img
      onClick={() => onHandleTaskComplete(thisTask.task)}
      src={imgSrc}
      onMouseOut={handleOnMouseOut}
      onMouseOver={handleOnMouseOver}
    />
  );
}
