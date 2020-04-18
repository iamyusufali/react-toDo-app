import styled from 'styled-components';
import StyledButton from '../StyledComponents/StyledButton';


// Wrapper component
export const TodosWrapper = styled.section`
  display: flex;
  height: 5.5vh;
  width: 30vw;
  margin: auto;
  margin-top: 2rem;
  background-color: #fff;
`

// Span component
export const TodoItem = styled.span`
  width: 25vw;
  margin: .6rem 0 0 1rem;
  font-size: 1.5rem;
  color: #2d3436;
  text-decoration: ${({ done }) => done && 'line-through'};
`

// Button component
export const TodoButton = styled(StyledButton)`
  width: 2.5vw;
  height: 100%;
  background-color: ${({ done, color }) => done === undefined? color : !done? '#2ecc71' : '#f9ca24'};
  border-radius: 0;
`