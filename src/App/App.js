import React, { useState } from 'react'
import ToDo from '../Components/Todo'
import Header from '../Components/Header'
import Form from '../Components/Form'


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (item) => {
    setTodos([...todos, item]);
  }

  return (
    <div>
      <Header/>
      <Form addTodo={ addTodos } />
      { todos.map((todo, index) => <ToDo item={ todo } key={ index } />) }
    </div>
  );
}

export default App;