import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import logo from "./logo.svg";
import "./App.css";
import { store } from "./store";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`width: 450px;`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Wrapper className="card">
            <TodoList />
            <NewTodo />
          </Wrapper>
        </Container>
      </Provider>
    );
  }
}

export default App;
