import React, { useReducer } from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {TodoContext} from "./context/Todocontext"
import todoReducer from "./context/reducer"
import './App.css';
import TodoForm from "./Components/ToDoForm"
import AllTodos from './Components/AllTodos';

 const App =() => {
 
    const [Todos, dispatch] = useReducer(todoReducer,[])
    return (
      <TodoContext.Provider value={{Todos, dispatch}}> 
      <Container fluid>
        <h1>TODO APP USING REACT</h1>
        
       
        <AllTodos/>
        <TodoForm/>

        

      </Container>

      </TodoContext.Provider>

    
  );
    
};

export default App;
