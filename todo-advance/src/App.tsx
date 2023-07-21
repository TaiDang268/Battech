import "./App.css";
import { useState, useEffect } from "react";
import { ImContrast, ImSun } from "react-icons/im";
import Button from "./components/Button";
import Select from "./components/Select";
import AddModal from "./components/AddModal";
import Task from "./components/Task";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store";
import { useTheme } from "./redux/themeSlice";
function App() {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const [statusSelected, setStatusSelected] = useState<string>("All");
  const { theme, actionSetTheme } = useTheme();

  const tasks = useSelector((state: RootState) => state.tasks);
  const handleClickAddTaskBtn = () => {
    setOpenAddModal(true);
  };
  const handleOnCloseAddModal = () => {
    setOpenAddModal(false);
  };
  const handleOnOKAddModal = () => {
    setOpenAddModal(false);
  };
  const handleOnchangeSelect = (value: string) => {
    setStatusSelected(value);
  };
  const filteredTasks = tasks.tasks.filter((task) =>
    statusSelected === "All" ? true : task.status === statusSelected
  );
  const toggleTheme = () => {
    actionSetTheme(!theme);
  };
  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <div className="dark:bg-slate-700">
      <h1 className="text-center font-bold text-xl mb-10">TODOAPP</h1>
      <div className="flex justify-center items-center  ">
        <div className="flex  justify-between w-2/5 bg-white">
          <Button
            title="Add task"
            onClick={handleClickAddTaskBtn}
            className="bg-blue-500 hover:bg-blue-400"
          />
          <Select
            options={["All", "Complete", "Incomplete"]}
            onChange={handleOnchangeSelect}
          />
        </div>
      </div>
      <div className=" w-2/5 bg-slate-300 m-auto mt-5 rounded max-h-[500px] p-4 overflow-auto">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            status={task.status}
            dateModify={task.dateModify}
          />
        ))}
      </div>
      {openAddModal ? (
        <AddModal onClose={handleOnCloseAddModal} onOK={handleOnOKAddModal} />
      ) : null}
      <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
        <button
          className="text-xl w-8 h-8 leading-9 rounded-full m-1 dark:text-sky-600 text-center flex justify-center items-center"
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          {theme ? <ImSun /> : <ImContrast />}
        </button>
      </div>
    </div>
  );
}

export default App;
