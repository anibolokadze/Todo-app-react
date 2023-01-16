import React, { FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  return (
    <div className="container">
      <div className="content">
        <Header />
        <TaskInput setTask={setTask} task={task} />
        <AddTask
          task={task}
          setTodoList={setTodoList}
          todoList={todoList}
          setTask={setTask}
        />
        <TaskList todoList={todoList} setTodoList={setTodoList} task={task} />
      </div>
    </div>
  );
};

export default App;
