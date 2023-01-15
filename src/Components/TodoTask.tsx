import React from "react";
import { ITask } from "../Interfaces";
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <div className="task">
        <div className="context">
          <span>{task.taskName}</span>
        </div>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </>
  );
};
export default TodoTask;
