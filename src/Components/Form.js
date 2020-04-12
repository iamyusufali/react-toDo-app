import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { StyledForm, StyledInput  } from '../StyledComponents/StyledForm';
import { StyledButton } from '../StyledComponents/StyledButton';



const Form = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) { 
      return; 
    } 
    else { 
      addTodo(value);
      setValue('');
    }
  }

  return (
    <StyledForm onSubmit={ handleSubmit }>
      <StyledInput 
        type='text' 
        placeholder='Add items'
        value={ value } 
        onChange={ (e) => setValue(e.target.value) }
      />
      <StyledButton>
        <FaPlus size='1.5rem'/>
      </StyledButton>
    </StyledForm>
  );
}

export default Form;