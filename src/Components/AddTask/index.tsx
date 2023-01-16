import React from "react";
import { ITask } from "../../Interfaces";
import style from "../AddTask/AddTask.module.scss";
export default function AddTask({
  task,
  setTodoList,
  todoList,
  setTask,
}: {
  task: string;
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
  todoList: ITask[];
  setTask: React.Dispatch<React.SetStateAction<string>>;
}) {
  const addTask = (): void => {
    const newTask = { taskName: task };
    if (newTask.taskName === "") {
      return;
    } else {
      setTodoList([...todoList, newTask]);
    }
    setTask("");
  };
  return (
    <button onClick={addTask} className={style.addTask}>
      +
    </button>
  );
}
