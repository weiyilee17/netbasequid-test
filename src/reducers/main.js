
const mainReducerInitialState = {
  test: 'hello'
};

export default (state = mainReducerInitialState, action) => {
  switch (action.type) {
    // case SET_TODOS:
    //   return {
    //     ...state,
    //     todos: action.todos
    //   };
    // case SET_CHECKED_OUT_TODOS:
    //   return {
    //     ...state,
    //     checkedOutTodos: action.checkedOutTodos
    //   };
    default:
      return state;
  }
}