import { createStore, applyMiddleware } from "redux";

import todo from "./reducer";

const storeDataMiddleware = ({ getState }) => next => action => {
  const before = next(action);
  localStorage.setItem("data", JSON.stringify(getState()));
  console.log("saved");
  return before;
};

const initialState = JSON.parse(localStorage.getItem("data"));

console.log(initialState);

export const store = createStore(
  todo,
  initialState,
  applyMiddleware(storeDataMiddleware)
);
