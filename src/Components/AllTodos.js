import React,{useContext} from "react"
import {FaCheck} from "react-icons/fa"
import {ListGroup,ListGroupItem} from "reactstrap"
import {TodoContext} from "../context/Todocontext"
import {REMOVE_TODO} from "../context/action.types"

const AllTodos = () =>{

    const {Todos, dispatch} = useContext(TodoContext);


    return(
        <ListGroup className="mt-12 mb-2 items">
            {Todos.map(todo =>(
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
            <span className="float-right" onClick={()=>{
                dispatch({
                    type: REMOVE_TODO,
                    payload: todo.id
                })
            }}><FaCheck/></span>

                </ListGroupItem>
            ))}

        </ListGroup>

    );

};
export default AllTodos;