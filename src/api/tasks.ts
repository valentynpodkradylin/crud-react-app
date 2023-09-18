import { generateId } from "../utils/generate-id";
import { sleep } from "../utils/sleep";

export type TaskStatus = "in-progress" | "done" | "backlog" | "review";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  description: string;
}

let tasks: Task[] = [
  {
    id: generateId(),
    title: "Create next.js project",
    description: "Write project",
    status: "backlog",
  },
  {
    id: generateId(),
    title: "Create react-native.js project",
    description: "Write project",
    status: "in-progress",
  },
  {
    id: generateId(),
    title: "Create solid.js project",
    description: "Write project",
    status: "done",
  },
];

export async function getTasks() {
  await sleep();
  return tasks;
}

export function createTasks(data: Omit<Task, "id">) {
  const id = generateId();

  const createdTask = {
    id,
    ...data,
  } satisfies Task;

  tasks.push(createdTask);

  return createTasks;
}

export function updateTasks(
  id: string | number,
  data: Partial<Omit<Task, "id">>
) {
  let updatedTask: Task;

  tasks = tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    updatedTask = {
      ...task,
      ...data,
    } satisfies Task;

    return updatedTask;
  });
}

export function deleteTasks() {}
