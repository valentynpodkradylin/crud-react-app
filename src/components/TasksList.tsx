import { FC } from "react";
import { Task } from "../api/tasks";
import TaskItem from "./TaskItem";

interface ITasksListProps {
  tasks: Task[];
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
} satisfies Record<string, React.CSSProperties>;

export const TasksList: FC<ITasksListProps> = (props) => {
  const { tasks } = props;

  return (
    <div style={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
