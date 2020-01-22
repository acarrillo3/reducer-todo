
import React from 'react';

const Todo = (props) => {
    const {todo, handleToggle} = props;

    return (
        <div onClick={() => handleToggle(todo.id)} className={todo.completed ? 'completed' : ''}>{todo.item}</div>
    )
}

export default Todo;