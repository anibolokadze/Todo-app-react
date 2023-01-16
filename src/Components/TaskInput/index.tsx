import { ChangeEvent, useState } from "react";
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
      <button>V</button>
      <input
        type="text"
        placeholder="Task..."
        name="task"
        onChange={handleChange}
        value={task}
      />
    </form>
  );
}
