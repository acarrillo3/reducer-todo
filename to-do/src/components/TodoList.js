import React, {useState, useReducer} from 'react';
import { listReducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [newItemText, setNewItemText] = useState('');
    console.log(state)

    return (
        <div>               
            {state.map(todo => (
            // <div key={todo.id}> {todo.text}</div> here we are using the maps function and what is saying is that for each todo a div is created which renders the text and we are giving it a key which is the todo id
            <Todo
              key={todo.id}
              todo={todo}
             />
         ))}
</div>
    )
}
export default TodoList;