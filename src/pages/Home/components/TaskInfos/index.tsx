// Imports

import { useEffect, useState } from "react";
import { TaskInfosContainer, TextInfo } from "./styles";

// Imports

export const TaskInfos = () => {
  const [tasksCreated, setTasksCreated] = useState();
  const [tasksDone, setTasksDone] = useState();

  localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!).length
    : 0;
  localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!).filter(
        (task: any) => task.done
      ).length
    : 0;

  useEffect(() => {
    setTasksCreated(
      localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks")!).length
        : 0
    );
    setTasksDone(
      localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks")!).filter(
            (task: any) => task.done
          ).length
        : 0
    );
    function getTasks() {
      setTasksCreated(
        localStorage.getItem("tasks")
          ? JSON.parse(localStorage.getItem("tasks")!).length
          : 0
      );
      setTasksDone(
        localStorage.getItem("tasks")
          ? JSON.parse(localStorage.getItem("tasks")!).filter(
              (task: any) => task.done
            ).length
          : 0
      );
    }

    window.addEventListener("storage", getTasks);
  }, []);

  return (
    <TaskInfosContainer>
      <TextInfo color="#4EA8DE">
        <span>Tarefas criadas</span>
        <small>{tasksCreated}</small>
      </TextInfo>
      <TextInfo color="#8284FA">
        <span>Concluídas</span>
        <small>{tasksDone}</small>
      </TextInfo>
    </TaskInfosContainer>
  );
};
