import { TrashButton } from "./TrashButton";
import { CheckTaskImage } from "./CheckTaskImage";

import styles from "./SingleTask.module.css";

interface SingleTaskProps {
  task: string;
  isTaskDone: boolean;
  onHandleTaskComplete: (currentTask: string) => void;
  onDeleteTask: (currentTaskId: string) => void;
}

export function SingleTask({
  task,
  isTaskDone,
  onHandleTaskComplete,
  onDeleteTask,
}: SingleTaskProps) {
  const thisTask = {
    task: task,
  };

  function handleDelete() {}

  return (
    <div className={isTaskDone ? styles.taskDone : styles.defaultTask}>
      <CheckTaskImage
        isTaskDone={isTaskDone ? true : false}
        onHandleTaskComplete={onHandleTaskComplete}
        thisTask={thisTask}
      />
      <p>{task}</p>
      <TrashButton onDeleteTask={onDeleteTask} task={task} />
    </div>
  );
}
