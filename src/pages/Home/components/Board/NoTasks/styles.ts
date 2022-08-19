import styled from 'styled-components'

export const BoardWithoutTasks = styled.main`
  opacity: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  border-top: 1px solid #333333;
  border-radius: 5px;
  width: 100%;

  svg {
    margin-bottom: 25px;
  }

  p {
    font-size: 1.4rem;
  }
`;