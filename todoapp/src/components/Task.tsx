import { Button } from "antd";
import { BsFillTrash3Fill, BsFillPencilFill } from "react-icons/bs";
import { IStyleTasksItem } from "../App";
interface TaskProps {
  task: IStyleTasksItem;
  setOpenEdit: Function;
  deleteTask: Function;
  setSelectedTask: Function;
}
const Task = (props: TaskProps) => {
  const { task, setOpenEdit, deleteTask, setSelectedTask } = props;
  const handleClickDeleteBtn = () => {
    deleteTask(task.id);
  };
  const handleClickEditBtn = () => {
    setOpenEdit(true);
    setSelectedTask(task);
  };
  return (
    <>
      <div className="wrapper-task">
        <input type="checkbox" />
        <div className="task-description">
          <div className="task-name">{task.name}</div>
          <div className="task-time-modify">{task.time}</div>
        </div>
        <div className="action">
          <Button className="delete-btn" onClick={handleClickDeleteBtn}>
            <BsFillTrash3Fill style={{ color: "red" }} />
          </Button>
          <Button className="edit-btn" onClick={handleClickEditBtn}>
            <BsFillPencilFill style={{ color: "green" }} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Task;
