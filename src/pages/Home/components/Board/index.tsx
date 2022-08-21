// Imports

import { NoTasks } from "./NoTasks"
import { BoardContainer } from "./styles"
import { Tasks } from "./Tasks";


// Imports

export const Board = () => {
  const handleClearTasks = () => {
    localStorage.clear()
    window.location.reload()
  }
  // get tasks from localStorage array
  const tasks = JSON.parse(localStorage.getItem("tasks")!) || [];
  const tasksLength = tasks.length;

  return (
    <BoardContainer>
      {tasks && (
        <>
          <button onClick={handleClearTasks}>Limpar tudo</button>
          {tasks.map((task: any) => <Tasks task={task} key={task.id} />)}
        </>
      )}
      {tasks.length === 0 && <NoTasks />}
    </BoardContainer>
  );


}