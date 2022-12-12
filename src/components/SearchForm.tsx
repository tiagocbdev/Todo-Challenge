import styles from "./SearchForm.module.css";
import PlusIcon from "../assets/plus-icon.svg";
import { useState } from "react";

export function SearchForm(props: any) {
  const [newTaskContent, setNewTaskContent] = useState("");

  function onChange(e: any) {
    setNewTaskContent(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.handleNewTask(newTaskContent);
    setNewTaskContent("");
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.searchField}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskContent}
        onChange={onChange}
      />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        Criar
        <img src={PlusIcon} alt="Add icon" />
      </button>
    </form>
  );
}
