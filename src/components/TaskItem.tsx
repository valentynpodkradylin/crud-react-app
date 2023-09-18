import { FC } from "react";
import { Task } from "../api/tasks";

const styles = {
  task: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    background: "lightgray",
    borderRadius: 8,
  },
} satisfies Record<string, React.CSSProperties>;

interface ITaskItemProps {
  task: Task;
}

const TaskItem: FC<ITaskItemProps> = (props) => {
  const { task } = props;

  return (
    <div style={styles.task}>
      <div>{task.title}</div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => {}}>update</button>
        {task.description}
      </div>
    </div>
  );
};

export default TaskItem;
