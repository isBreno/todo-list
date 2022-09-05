// Imports

import { Check, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { DeleteButton, TaskCard } from "./styles";

// Imports

interface taskProps {
  task: {
    title: string;
    done: boolean;
    id: number;
  };
}

export const Tasks = ({ task }: taskProps) => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  const key = task.id;

  const handleDelete = () => {
    const newTasks = tasks.filter((task: any) => task.id !== key);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    window.dispatchEvent(new Event("storage"));
  };
  const handleSwitch = () => {
    const newTasks = tasks.map((task: any) => {
      if (task.id === key) {
        task.done = !task.done;
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <TaskCard done={task.done}>
      <div>
        <button onClick={handleSwitch}>
          {task.done ? <Check color="white" /> : ""}
        </button>
        <p>{task.title}</p>
      </div>
      <DeleteButton onClick={handleDelete}>
        <Trash size={24}  />
      </DeleteButton>
    </TaskCard>
  );
};
