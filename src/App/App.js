import React, { useState } from 'react'
import ToDo from '../Components/Todo'
import Header from '../Components/Header'
import Form from '../Components/Form'




const App = () => {
  // To manage and add new items
  const [todos, setTodos] = useState([]);

  const addNewTodo = (currentItem) => {
    setTodos([...todos, currentItem]);
  }

  // To remove the item from the list
  const removeTodo = (key) => {
    let filterdItems = todos.filter(todo => todo.key !== key);
    setTodos(filterdItems);
  }

  return (
    <div>
      <Header/>
      <Form addNewTodo={ addNewTodo } />
      { 
        todos.map((todo, index) => 
          <ToDo 
            item={ todo } 
            key={ index } 
            removeTask={ removeTodo }
          />
        ) 
      }
    </div>
  );
}

export default App;