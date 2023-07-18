import { Select, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { IStyleTasksItem } from "../App";
interface EditTaskProps {
  openEdit: boolean;
  setOpenEdit: Function;
  selectedTask: IStyleTasksItem | null;
  updateTask: Function;
}
const EditTask = (props: EditTaskProps) => {
  const { openEdit, setOpenEdit, selectedTask, updateTask } = props;
  const [valueInput, setValueInput] = useState("");
  // click update btn
  const handleUpdateBtn = () => {
    if (selectedTask) {
      const updatedTask: IStyleTasksItem = {
        ...selectedTask,
        name: valueInput,
      };
      updateTask(updatedTask);
    }
    setOpenEdit(false);
  };
  useEffect(() => {
    if (selectedTask) {
      setValueInput(selectedTask.name);
    }
  }, [selectedTask]);
  return (
    <Modal
      title="EDIT TASK"
      open={openEdit}
      onOk={handleUpdateBtn}
      onCancel={() => setOpenEdit(false)}
      okText="Update Task"
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
export default EditTask;
