import React, {useState} from 'react';

const TodoForm = ({dispatch}) => {
    const [newItemText, setNewItemText] = useState('');

    const handleChange = (e) => {
        setNewItemText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: newItemText
          })
          setNewItemText('');
        }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input 
                    name="newItemText"
                    type="text"
                    value={newItemText} 
                    onChange={handleChange} 
                    placeholder="todo..."
                />
                <button onClick={handleSubmit}>Add To-Do</button>
            </form>
        </div>
    );
}

export default TodoForm;