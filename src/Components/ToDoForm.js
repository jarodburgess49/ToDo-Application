import React,{useState,useContext} from "react"
import{
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"
import {v4} from "uuid"
import {TodoContext} from "../context/Todocontext"
import {ADD_TODO} from "../context/action.types"

const TodoForm = () => {
    const [todoString, setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext)
    const controller = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please enter some text ")

        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")

    }
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                <Input type="text"
                name="todo"
                id="todo"
                placeholder="Enter your ToDO"
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    onClick={controller}

                     color="primary">
                         ADD
                       
                    </Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
            
        </Form>

    )

    
}
export default TodoForm;
