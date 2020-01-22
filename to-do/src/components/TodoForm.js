import React, {useState} from 'react';
//import shortid from 'shortid';

const TodoForm = () => {
    const [newItemText, setNewItemText] = useState('');

    const handleChange = (e) => {
        setNewItemText(e.target.value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     newItemText
    // }

    return (
        <form >
            <input 
                name="newItemText"
                type="text"
                value={newItemText} 
                onChange={handleChange} 
                placeholder="todo..."
            />
            {/* <button onClick={handleSubmit}>add to-do</button> */}
            <button>Add To-Do</button>
        </form>
    );
}

export default TodoForm;