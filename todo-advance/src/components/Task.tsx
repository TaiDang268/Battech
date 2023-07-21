import { useDispatch } from "react-redux";
import { ITask } from "../types/interface";
import Button from "./Button";
import { deleteTask, updateTask } from "../redux/taskSlice";
import EditModal from "./EditModal";
import { useState } from "react";

const Task = (props: ITask) => {
  const { id, name, status, dateModify, onClickEditBtn } = props;
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<ITask>({});
  const [checkboxChange, setCheckboxChange] = useState<boolean>(false);
  let isChecked = status === "Complete" ? true : false;
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(id as string));
  };
  const handleOnClickEditBtn = () => {
    setTaskEdit(props);
    setOpenEditModal(true);
    onClickEditBtn?.();
  };
  const handleOnCloseEdit = () => {
    setOpenEditModal(false);
  };
  const handleOnChangCheckbox = () => {
    const currentTime = new Date();
    const dateModify = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    const task: ITask = {
      id,
      name,
      status: isChecked ? "Incomplete" : "Complete",
      dateModify,
    };
    setCheckboxChange(!checkboxChange);
    dispatch(updateTask(task));
  };

  return (
    <div
      className="w-full h-20 bg-white rounded mt-4 box-border 
                     flex items-center p-4 text-sm"
    >
      <input
        onChange={handleOnChangCheckbox}
        checked={isChecked}
        type="checkbox"
        className="w-6 h-6 mr-2"
      />
      <div className="flex items-center flex-1 justify-between ">
        <div>
          <div className={`${isChecked ? "line-through" : ""}`}>{name}</div>
          <div>{status}</div>
          <div>{dateModify}</div>
        </div>
        <div>
          <Button
            title="Delete"
            className="bg-red-600 hover:bg-red-500 mr-2"
            onClick={handleDeleteTask}
          />
          <Button
            title="Edit"
            className="bg-green-600 hover:bg-green-500"
            onClick={handleOnClickEditBtn}
          />
        </div>
      </div>
      {openEditModal ? (
        <EditModal onCloseEdit={handleOnCloseEdit} taskEdit={taskEdit} />
      ) : null}
    </div>
  );
};
export default Task;
