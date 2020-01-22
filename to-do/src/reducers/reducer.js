import react from 'react'

// Step 1 creat a reducer function and and initial state object
export const listReducer = (state) => {
    return {...state, todo:'new todo'}
};

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about context api',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Learn about redux',
        completed: false,
        id: 3892987591
    },
    {
        item: 'Learn about async redux',
        completed: false,
        id: 3892987592
    },

]
