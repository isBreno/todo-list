import styled from 'styled-components'

interface TextInfoProps {
  color: string;
}

export const TaskInfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  

`;

export const TextInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    color: ${(props: TextInfoProps) => props.color};
    font-size: 1.6rem;
    font-weight: bold;
  }

  small {
    color: white;
    border-radius: 999px;
    background: #333;
    font-size: 1.6rem;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
`;