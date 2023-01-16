import React from "react";
import { ITask } from "../../Interfaces";
import style from "../TodoTask/TodoTask.module.scss";
import deleteIcon from "../../assets/delete.icon.svg";
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const addedTime = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className={style.task}>
      <>
        <div className="context">
          <h1>{task.taskName}</h1>
          <p>Today at {addedTime}</p>
        </div>
      </>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <button className={style.button}></button>
        <img src={deleteIcon} />
      </button>
    </div>
  );
};
export default TodoTask;
