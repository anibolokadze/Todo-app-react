import React from "react";
import { ITask } from "../../Interfaces";
import TodoTask from "../TodoTask";
import style from "../TodoTask/TodoTask.module.scss";
export default function TaskList({
  setTodoList,
  todoList,
  task,
}: {
  task: string;
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
  todoList: ITask[];
}) {
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };
  return (
    <div className={style.todoTask}>
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />;
      })}
    </div>
  );
}
