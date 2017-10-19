import uuid from "uuid";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHECK_TODO = "CHECK_TODO";

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { id: uuid(), text: todo, completed: false }
});

export const removeTodo = todoid => ({
  type: REMOVE_TODO,
  payload: todoid
});

export const checkTodo = todoid => ({
  type: CHECK_TODO,
  payload: todoid
});
