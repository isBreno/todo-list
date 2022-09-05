import styled from 'styled-components'

export const InputForm = styled.form`
  display: flex;
  gap: 8px;
  transform: translateY(-27px);

  button {
    width: 90px;
    height: 52px;
    background: #1e6f9f;
    border-radius: 8px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 1.4rem;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: #4ea8de;
    }

    &:focus {
      background: #4ea8de;
    }
  }

  input {
    padding: 16px;
    border-radius: 8px;
    background: #262626;
    border: 1px solid #0d0d0d;
    outline: none;
    width: 100%;
    color: white;

    &:focus {
      border-color: #1e6f9f;
    }
  }
`;