import { Header } from "../../components/Header"
import { Board } from "./components/Board"
import { Input } from "./components/Input"
import { TaskInfos } from "./components/TaskInfos"
import { Container } from "./styles"



export const Home = () => {
  return (
    <>
     <Header />
      <Container>
        <Input />
        <TaskInfos />
        <Board />
      </Container>
    </>
  )
}