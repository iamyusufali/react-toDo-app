import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { StyledForm, StyledInput  } from '../StyledComponents/StyledForm';
import StyledButton from '../StyledComponents/StyledButton';



const Form = ({ addNewTodo }) => {
  const [userTxt, setUserTxt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userTxt) { 
      return; 
    } 
    else { 
      let currentItem = { text: userTxt, key: Date.now() }
      addNewTodo(currentItem);
      setUserTxt('');
    }
  }

  return (
    <StyledForm onSubmit={ handleSubmit }>
      <StyledInput 
        type='text' 
        placeholder='Add items'
        value={ userTxt } 
        onChange={ (e) => setUserTxt(e.target.value) }
      />
      <StyledButton>
        <FaPlus size='1.5rem'/>
      </StyledButton>
    </StyledForm>
  );
}

export default Form;