import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from "./actions";

const initialState = [
  {
    id: 1,
    text: "First Todo",
    completed: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case CHECK_TODO:
      return state.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
      );

    default:
      return state;
  }
};

export default reducer;
