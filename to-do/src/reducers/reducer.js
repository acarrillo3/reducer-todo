export const listReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              item: action.payload,
              completed: false,
              id: Date.now()
            }
          ]
        case "TOGGLE_EDIT":
          return state.map(todo => {
            console.log(action.payload)
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          });
        case 'DONE_TOGGLE':
          return state.filter(done => done.id !== action.payload)
        default:
          return state
      }};

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
