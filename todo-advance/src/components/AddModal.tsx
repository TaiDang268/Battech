import { ITask } from "../types/interface";
import Button from "./Button";
import Select from "./Select";
import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { addTask } from "../redux/taskSlice";
interface IAddModal {
  onClose?: () => void;
  onOK?: () => void;
}
const AddModal = (props: IAddModal) => {
  const { onClose, onOK } = props;
  const [statusSelected, setStatusSelected] = useState("Complete");
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();
  const handleClickAddTaskBtn = () => {
    if (valueInput.trim() === "") return;
    const currentTime = new Date();
    const dateModify = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    const task: ITask = {
      id: nanoid(),
      name: valueInput,
      status: statusSelected,
      dateModify,
    };
    dispatch(addTask(task));

    setValueInput("");
    setStatusSelected("");
    onOK?.();
  };
  const modalRef = useClickAway(() => {
    onClose?.();
  });

  const handleOnchangeSelect = (value: string) => {
    setStatusSelected(value);
  };
  const handleOnchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div ref={modalRef} className="bg-white  rounded border-black w-1/3  p-4">
        <h2 className="font-bold text-center">ADD TASK</h2>
        <div className="flex mt-3 items-center justify-between">
          <span className="w-20">Title</span>
          <input
            className="border-solid border rounded border-black outline-none pl-2 h-9 flex-grow"
            onChange={handleOnchangeInput}
          />
        </div>
        <div className="flex mt-3 items-center justify-between">
          <span className="w-20">Status</span>
          <Select
            options={["Complete", "Incomplete"]}
            className="flex-grow"
            onChange={handleOnchangeSelect}
          />
        </div>
        <div className="flex mt-3 items-center justify-end">
          <Button
            className="mr-2 bg-red-600 hover:bg-red-400"
            title="Cancel "
            onClick={onClose}
          />
          <Button
            className="bg-green-500 hover:bg-green-400"
            title="Add Task  "
            onClick={handleClickAddTaskBtn}
          />
        </div>
      </div>
    </div>
  );
};
export default AddModal;
