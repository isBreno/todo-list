

// Imports

import { TaskInfosContainer, TextInfo } from "./styles"


// Imports

export const TaskInfos = () => {
  const tasksCreated = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")).length : 0;
  const tasksDone = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")).filter(task => task.done).length : 0

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

}