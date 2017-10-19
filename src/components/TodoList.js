import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { removeTodo, checkTodo } from "../store/actions";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const TodoList = props => {
  const { removeTodo, checkTodo, todos } = props;
  return (
    <Wrapper>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span className="tag">
              {todo.text}
              <input
                className="checkbox"
                type="checkbox"
                onClick={() => checkTodo(todo.id)}
                defaultChecked={todo.completed}
              />
              <button className="delete" onClick={() => removeTodo(todo.id)} />
            </span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const mapDispatch = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  checkTodo: id => dispatch(checkTodo(id))
});

const mapState = state => ({ todos: state });

export default connect(mapState, mapDispatch)(TodoList);
