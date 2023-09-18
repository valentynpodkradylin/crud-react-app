import { Task } from "./../api/tasks";
import { useState } from "react";

const useTasks = (initialTask?: Task) => {
  const [task, setTask] = useState(initialTask);

  useEffect(() => {}, []);

  return {
    task,
  };
};
