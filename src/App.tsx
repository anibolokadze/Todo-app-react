import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  return (
    <div className="App">
      <div className="header"></div>
      <div className="toDoList">
        <input
          type="text"
          placeholder="Task..."
          name="task"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Days..."
          name="deadLine"
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default App;
