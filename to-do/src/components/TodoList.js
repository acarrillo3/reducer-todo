import React, {useReducer} from 'react';
import { listReducer, initialState } from '../reducers/reducer';
import TodoForm from './TodoForm';
import CardMap from './cardMap';

const TodoList = () => {
    const [state, dispatch] = useReducer(listReducer, initialState);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            <div>
                {state.map(bMap => (
                    <CardMap key={bMap.id} bMap={bMap} dispatch={dispatch} />
                ))}
            </div>
        </div>
    )
}
export default TodoList;