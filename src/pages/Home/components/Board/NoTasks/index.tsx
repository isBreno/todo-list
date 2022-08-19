

// Imports

import { Clipboard, ClipboardText } from "phosphor-react"
import { BoardWithoutTasks } from "./styles"


// Imports

export const NoTasks = () => {

  return (
    <BoardWithoutTasks>
      <ClipboardText size={72} opacity={20}/>
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </BoardWithoutTasks>
  )

}