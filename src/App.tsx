import { useState } from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { Tasks } from "./components/Tasks";

import "./global.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isTaskDone: false,
    },
    {
      id: "Lorem Ipsum Dolor Sikamet.",
      task: "Lorem Ipsum Dolor Sikamet.",
      isTaskDone: false,
    },
  ]);

  function handleTaskComplete(currentTask: string) {
    setTasks((prevState) =>
      prevState.map((singleTask) => {
        const singleTaskIsDone = singleTask.isTaskDone === true;
        const singleTaskIsNotDone = singleTask.isTaskDone === false;
        const singleTaskMatches = singleTask.task === currentTask;

        if (singleTaskMatches && singleTaskIsNotDone) {
          return { ...singleTask, isTaskDone: true };
        } else if (singleTaskMatches && singleTaskIsDone) {
          return { ...singleTask, isTaskDone: false };
        }

        return singleTask;
      })
    );
  }

  function handleNewTask(newTask: string) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: newTask, task: newTask, isTaskDone: false },
    ]);
  }

  function onDeleteTask(id: string) {
    let tasksWithoutDeletedOne: any = [];
    tasks.map((task) => {
      if (task.id !== id) {
        tasksWithoutDeletedOne.push(task);
      }
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div className="App">
      <Header />
      <SearchForm handleNewTask={handleNewTask} />
      <Tasks
        tasks={tasks}
        handleTaskComplete={handleTaskComplete}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
