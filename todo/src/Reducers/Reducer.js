export const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos,
                action.payload]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map((e) => {
                    if(e.id === action.payload) {
                        return {
                            ...e,
                            completed: !e.completed
                        }
                    }else{
                        return e;
                    }
                })
            }
        case "CLEAR":
            return{
                ...state,
                todos: state.todos.filter(item => !item.completed)
            }
            
        default:
            return state;
    }
}




export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}


