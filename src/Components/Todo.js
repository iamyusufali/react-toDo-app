import React, { useState } from 'react';
import { TodosWrapper, TodoItem, TodoButton } from '../StyledComponents/StyledTodos';
import { FaCheck, FaMinus, FaArrowLeft, FaTrashAlt } from 'react-icons/fa';
import Backdrop from '../StyledComponents/Backdrop';
import { ModalWrapper, Text, ButtonWrapper, Button } from '../StyledComponents/StyledModal';


const Todo = ({ item, removeTask }) => {
  // To check if task is done and mark or unmark it based on the check.
  const [taskDone, manageTask] = useState(false);

  const toggleTodo = () => {
    manageTask(!taskDone);
  }

  // To prompt for delete confirmation
  const [confirmPrompt, setConfirm] = useState(false);

  const toggleConfirm = () => {
    setConfirm(!confirmPrompt);
  }


  return (
      <>
        <TodosWrapper >
          <TodoItem done={ taskDone }>
            { item.text }
          </TodoItem>
          <TodoButton done={ taskDone } onClick={ toggleTodo }>
            { !taskDone ? <FaCheck size='1.2rem' color='#fff'/> : <FaMinus size='1.2rem' color='#fff'/> }
          </TodoButton>
          <TodoButton color='#ee5253' onClick={ () => toggleConfirm() }>
            <FaTrashAlt size='1rem' color='#fff'/> 
          </TodoButton>
        </TodosWrapper>
        {/* Backdrop and Modal section */}
        { 
          confirmPrompt ? 
          <>
            <Backdrop />
            <ModalWrapper>
              <Text text='Confirm Delete?'/>
              <ButtonWrapper>
                <Button type='back' onClick={ toggleConfirm }>
                  <FaArrowLeft size='1.2rem'/>
                </Button>
                <Button onClick={ () => removeTask(item.key) }>
                  <FaTrashAlt size='1.1rem'/>
                </Button>
              </ButtonWrapper>
            </ModalWrapper>
          </>
            : null 
        }
      </>
  );
}

export default Todo ;