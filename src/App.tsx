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
    <div className="container" id="light">
      <div className="content-wrapper">
        <Header />
        <div className="padding">
          <div className="flex-input">
            <TaskInput setTask={setTask} task={task} />
            <AddTask
              task={task}
              setTodoList={setTodoList}
              todoList={todoList}
              setTask={setTask}
            />
          </div>
          <div>
            <TaskList
              todoList={todoList}
              setTodoList={setTodoList}
              task={task}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
