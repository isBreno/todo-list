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
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  return (
    <BoardContainer>
      <button onClick={handleClearTasks}>Limpar tudo</button>
      {tasks ? tasks.map((task) => <Tasks task={task} key={task.id}/>) : <NoTasks />}
    </BoardContainer>
  );


}