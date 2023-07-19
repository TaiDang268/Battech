import "./App.css";
import { Button, Select } from "antd";
import Task from "./components/Task";
import { useState } from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
export interface IStyleTasksItem {
  id: string;
  name: string;
  time: string;
  status: string;
}
function App() {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedTask, setSelectedTask] = useState<IStyleTasksItem | null>(
    null
  );
  const [selectedStatus, setSelectedStatus] = useState("");
  const [tasks, setTasks] = useState<IStyleTasksItem[]>([
    { id: "1", name: "Da bong", time: "2023", status: "hoan thanh" },
  ]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const updateTask = (updatedTask: IStyleTasksItem) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };
  const filteredTasks = selectedStatus
    ? tasks.filter((task) => task.status === selectedStatus)
    : tasks;

  return (
    <>
      <div className="App">
        <span className="title-app">TODOLIST</span>
        <div className="header">
          <Button type="primary" onClick={showModal}>
            Add Task
          </Button>
          <Select
            style={{
              width: 120,
            }}
            defaultValue="all"
            value={selectedStatus}
            onChange={handleStatusChange}
            options={[
              {
                value: "all",
                label: "All",
              },
              {
                value: "incomplete",
                label: "Incomplete",
              },
              {
                value: "complete",
                label: "Complete",
              },
            ]}
          ></Select>
        </div>
        <div className="content">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setOpenEdit={setOpenEdit}
              deleteTask={deleteTask}
              setSelectedTask={setSelectedTask}
            />
          ))}
        </div>
      </div>
      <AddTask open={open} hideModal={hideModal} setTasks={setTasks} />
      <EditTask
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        selectedTask={selectedTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default App;
