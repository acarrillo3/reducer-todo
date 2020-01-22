//step 3 
import React from 'react';

export default (props) => (
    <div>
        <div 
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}
        >
            {props.todo.text}
        </div>{/*when ever someone click on a todo item is going to call funciton called toggle complete*/}
        <button onClick={props.onDelete}>x</button>
    </div>
);