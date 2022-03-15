export const initialState = {
    tasks: typeof window !== 'undefined' && localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : []
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TASK":
        localStorage.setItem(`tasks`, JSON.stringify(action.tasks))
        return {
          ...state,
          tasks: action.tasks,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  