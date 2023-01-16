import { ChangeEvent, useState } from "react";
import style from "../TaskInput/TaskInput.module.scss";
export default function TaskInput({
  setTask,
  task,
}: {
  setTask: React.Dispatch<React.SetStateAction<string>>;
  task: string;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  return (
    <form>
      <input type="checkbox" className={style.checkbox} />
      <input
        type="text"
        placeholder="Note"
        name="task"
        onChange={handleChange}
        value={task}
      />
    </form>
  );
}
