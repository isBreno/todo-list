import styled from 'styled-components'

interface TaskStatus {
  done: boolean;
}

export const TaskCard = styled.div<TaskStatus>`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;

  background: #262626;
  ${(props) => !props.done && "border: 1px solid #333333;"}
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 16px;
  gap: 12px;
  width: 100%;
  height: 72px;
  position: relative;
  width: 100%;

  > div {
    display: flex;
    gap: 1rem;
  }

  button:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    background: none;
    cursor: pointer;
    border-radius: 100%;
    border: ${(props) => (props.done ? "none" : "1px solid #1e6f9f")};
    background: ${(props) => (props.done ? "#5E60CE" : "#262626")};
  }

  button:nth-child(2) {
    background: none;
    border: none;
    display: block;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => (props.done ? "#808080" : "#FEFEFE")};
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  svg {
    min-height: 16px;
    min-width: 16px;
    cursor: pointer;
  }
`;