import React, { useState } from 'react';
import { TodosWrapper, TodoItem, TodoButton } from '../StyledComponents/StyledTodos';
import { FaCheck, FaMinus, FaTrashAlt } from 'react-icons/fa';


const Todo = ({ item }) => {
  const [todoDone, markTodo] = useState(false);

  const toggleTodo = () => {
    markTodo(!todoDone);
  }

  return (
      <TodosWrapper >
        <TodoItem done={ todoDone }>
          { item }
        </TodoItem>
        <TodoButton done={ todoDone  } onClick={ toggleTodo }>
        { !todoDone ? <FaCheck size='1.2rem' color='#fff'/> : <FaMinus size='1.2rem' color='#fff'/>}
        </TodoButton>
        <TodoButton color='#ee5253'>
          <FaTrashAlt size='1rem' color='#fff'/> 
        </TodoButton>
      </TodosWrapper>
  );
}

export default Todo ;