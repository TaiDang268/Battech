import { Select, Modal, Input } from "antd";
import { useState } from "react";
import { IStyleTasksItem } from "../App";
import { nanoid } from "nanoid";
interface AddTaskProps {
  open: boolean;
  hideModal: () => void;
  setTasks: Function;
}
const AddTask = (props: AddTaskProps) => {
  const { open, hideModal, setTasks } = props;
  const [valueInput, setValueInput] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = () => {
    if (valueInput.trim() === "") {
      return;
    }
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    setTasks((prev: IStyleTasksItem[]) => [
      ...prev,
      { id: nanoid(), name: valueInput, time: formattedTime, status },
    ]);
    setValueInput("");
    hideModal();
  };
  return (
    <Modal
      title="ADD TASK"
      open={open}
      onOk={handleAdd}
      onCancel={hideModal}
      okText="Add Task"
    >
      <div>
        <span>Title</span>
        <Input
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Status</span>
        <Select
          onChange={(e) => setStatus(e)}
          style={{
            width: 120,
          }}
          defaultValue="All"
          options={[
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
    </Modal>
  );
};
export default AddTask;
