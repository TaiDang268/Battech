import { useDispatch } from "react-redux";
import { ITask } from "../types/interface";
import Button from "./Button";
import Select from "./Select";
import { useClickAway } from "@uidotdev/usehooks";
import { useState } from "react";
import { updateTask } from "../redux/taskSlice";

interface IEditModal {
  onCloseEdit?: () => void;
  taskEdit: ITask;
}
const EditModal = (props: IEditModal) => {
  const { onCloseEdit, taskEdit } = props;
  const [valueInput, setValueInput] = useState(taskEdit.name);
  const [statusSelected, setStatusSelected] = useState(taskEdit.status);
  const dispatch = useDispatch();

  const modalRef = useClickAway(() => {
    onCloseEdit?.();
  });
  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };
  const handleOnchangeSelect = (value: string) => {
    setStatusSelected(value);
  };
  const handleOnClickUpdateBtn = () => {
    const currentTime = new Date();
    const dateModify = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    const task: ITask = {
      id: taskEdit.id,
      name: valueInput,
      status: statusSelected,
      dateModify,
    };
    dispatch(updateTask(task));
    setValueInput("");
    setStatusSelected("Complete");
    onCloseEdit?.();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white  rounded border-black w-1/3  p-4
      
      "
      >
        <h2 className="font-bold text-center">EDIT TASK</h2>
        <div className="flex mt-3 items-center justify-between">
          <span className="w-20">Title</span>
          <input
            className="border-solid border rounded border-black outline-none pl-2 h-9 flex-grow"
            value={valueInput}
            onChange={handleOnChangeInput}
          />
        </div>

        <div className="flex mt-3 items-center justify-between">
          <span className="w-20">Status</span>
          <Select
            value={statusSelected}
            options={["Complete", "Incomplete"]}
            className="flex-grow"
            onChange={handleOnchangeSelect}
          />
        </div>
        <div className="flex mt-3 items-center justify-end">
          <Button
            className="mr-2 bg-red-600 hover:bg-red-400"
            title="Cancel "
            onClick={onCloseEdit}
          />
          <Button
            title="Update"
            className="bg-green-500 hover:bg-green-400"
            onClick={handleOnClickUpdateBtn}
          />
        </div>
      </div>
    </div>
  );
};
export default EditModal;
