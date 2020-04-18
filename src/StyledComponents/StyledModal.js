import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';


const ModalWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 12rem;
  background-color: #fff;
  box-shadow: 3px 1px 20px rgba(0, 0, 0, 0.3);
  z-index: 200;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
`

const Title = styled.h3`
  font-size: 2em;
  font-weight: 400;
  color: #000;
`

const ButtonWrapper = styled(TextWrapper)`
  justify-content: space-evenly;
  height: 5rem;
`

const Button = styled(StyledButton)`
  background-color: ${({ type }) => type ? '#27ae60' : '#ff6b6b' };
  height: 2.5rem;
  width: 6.5rem;
`

const Text = ({ text }) => {
  return (
    <TextWrapper>
      <Title>{ text }</Title>
    </TextWrapper>
  );
}

export { ModalWrapper, Text, ButtonWrapper, Button };