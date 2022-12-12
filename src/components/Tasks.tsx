import { useEffect, useState } from "react";

import styles from "./Tasks.module.css";

import BoardIcon from "../assets/board-icon.svg";

import { SingleTask } from "./SingleTask";

export function Tasks(props: any) {
  let tasks = props.tasks;

  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    let countTasksDone = 0;

    tasks.forEach((task: any) => {
      if (task.isTaskDone === true) {
        countTasksDone += 1;
      }
    });

    setCompletedTasks(countTasksDone);
  }, [tasks]);

  return (
    <section className={styles.tasksSection}>
      <header className={styles.tasks}>
        <header className={styles.tasksHeader}>
          <div className={styles.tasksCreated}>
            <p>Tarefas Criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.tasksCompleted}>
            <p>Concluídas</p>
            <span>{completedTasks}</span>
          </div>
        </header>
        <div className={styles.tasksContainer}></div>
      </header>

      <div className={styles.tasksBoardNoContent}>
        <img src={BoardIcon} alt="" />
        <div>
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
      <div className={styles.taskBoard}>
        {tasks.map((task: any) => (
          <SingleTask
            onHandleTaskComplete={props.handleTaskComplete}
            key={task.task}
            task={task.task}
            isTaskDone={task.isTaskDone}
            onDeleteTask={props.onDeleteTask}
          />
        ))}
      </div>
    </section>
  );
}
