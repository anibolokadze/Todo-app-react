import { ChangeEvent, useRef, useState } from "react";
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
    <>
      <form>
        <input
          className={style.input}
          type="text"
          placeholder="Note"
          onChange={handleChange}
          value={task}
        />
      </form>
    </>
  );
}
