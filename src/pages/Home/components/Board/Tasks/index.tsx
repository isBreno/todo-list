// Imports

import { Check, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { TaskCard } from "./styles"


// Imports

interface taskProps
{
  task: { 
    title: string, 
    done: boolean,
    id: number,
  }
}

export const Tasks = ({ task }: taskProps) => {

    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const key = task.id

    const handleDelete = () => {

      const newTasks = tasks.filter((task: any) => task.id !== key);

      localStorage.setItem("tasks", JSON.stringify(newTasks))

      window.location.reload()
    };
    const handleSwitch = () => {
      const newTasks = tasks.map((task:any) => {
        if (task.id === key) {
          task.done = !task.done;
        }
        return task
      }
      )
      localStorage.setItem("tasks", JSON.stringify(newTasks))

      window.location.reload()

    }

  return (
    <TaskCard done={task.done}>
      <div>
        <button onClick={handleSwitch}>
          {task.done ? <Check color="white"/> : ''}
          </button>
        <p>{task.title}</p>
      </div>
      <Trash onClick={handleDelete} size={16} />
    </TaskCard>
  );

  }