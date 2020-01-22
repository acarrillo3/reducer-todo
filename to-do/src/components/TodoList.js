import React, {useState, useReducer} from 'react';
import { listReducer, initialState } from '../reducers/reducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);
    const [newItemText, setNewItemText] = useState('');
    console.log(state)

    return (
        <div>todoList goes here </div>
    )
}
export default TodoList;