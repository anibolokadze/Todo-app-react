import React, { useState } from "react";
import { ITask } from "../../Interfaces";
import style from "../TodoTask/TodoTask.module.scss";
import deleteIcon from "../../assets/delete.icon.svg";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
  const [taskTime, setTaskTime] = useState(new Date());
  const addedTime = taskTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className={style.task}>
      <>
        <div>
          <h1>{task.taskName}</h1>
          <p>Today at {addedTime}</p>
        </div>
      </>
      <div className={style.centered}>
        <input type="checkbox" className={style.checkbox} />
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          <img src={deleteIcon} />
        </button>
      </div>
    </div>
  );
};
export default TodoTask;
