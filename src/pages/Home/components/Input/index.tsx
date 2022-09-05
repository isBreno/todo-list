// Imports

import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { InputForm } from "./styles";

// Imports

export const Input = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle.trim()) {
      localStorage.setItem(
        "tasks",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("tasks") || "[]"),
          {
            title: taskTitle,
            done: false,
            id: JSON.parse(localStorage.getItem("tasks") || "[]").length + 1,
          },
        ])
      );
      setTaskTitle("");
      window.dispatchEvent(new Event("storage"));
    }

    return;
  };

  return (
    <InputForm onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTaskTitle(e.currentTarget.value)}
        value={taskTitle}
      />
      <button type="submit">
        Criar <PlusCircle size={18} />
      </button>
    </InputForm>
  );
};
