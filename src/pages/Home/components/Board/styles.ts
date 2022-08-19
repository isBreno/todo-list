import styled from 'styled-components'

export const BoardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 25px;

  > button {
    margin-right: auto;
    background: #1e6f9f;
    border-radius: 8px;
    border: none;
    color: #FEFEFE;
    padding: 10px;
    cursor: pointer;
  }
`;