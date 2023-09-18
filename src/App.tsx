import "./App.css";

import { Task, getTasks } from "./api/tasks";
import { useEffect, useState } from "react";

import { TasksList } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      return getTasks()
        .then((data) => {
          setTasks(data);
        })
        .finally(() => setIsLoading(false));
    };

    getData();
  }, []);

  return (
    <div>{isLoading ? <div>Loading...</div> : <TasksList tasks={tasks} />}</div>
  );
}

export default App;
