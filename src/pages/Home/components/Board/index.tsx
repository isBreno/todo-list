// Imports

import { useEffect, useState } from "react";
import { NoTasks } from "./NoTasks";
import { BoardContainer } from "./styles";
import { Tasks } from "./Tasks";

// Imports

export const Board = () => {
  // get tasks from localStorage array
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")!) || []);
    function getTasks() {
      setTasks(JSON.parse(localStorage.getItem("tasks")!) || []);
    }

    window.addEventListener("storage", getTasks);
  }, []);

  return (
    <BoardContainer>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task: any) => (
            <Tasks task={task} key={task.id} />
          ))}
        </>
      ) : (
        <NoTasks />
      )}
    </BoardContainer>
  );
};
