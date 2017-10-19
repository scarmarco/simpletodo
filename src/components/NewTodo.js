import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

class NewTodo extends Component {
  state = { newTodo: "" };

  handleChange = text => this.setState(prev => ({ newTodo: text }));

  addTodo = todo => {
    if (todo !== "") {
      this.props.dispatch(addTodo(todo));
      this.setState(prev => ({ newTodo: "" }));
    }
  };

  handleEnter = ev => {
    const { newTodo } = this.state;
    if (ev.key === "Enter" && newTodo !== "") {
      this.props.dispatch(addTodo(newTodo));
      this.setState(prev => ({ newTodo: "" }));
    }
  };

  render() {
    const { addTodo } = this.props;
    return (
      <Wrapper>
        <input
          className="input"
          type="text"
          placeholder="Type New Todo"
          onChange={ev => this.handleChange(ev.target.value)}
          value={this.state.newTodo}
          onKeyPress={this.handleEnter}
        />
        <button
          className="button"
          onClick={() => this.addTodo(this.state.newTodo)}
        >
          Add Todo
        </button>
      </Wrapper>
    );
  }
}

const mapState = state => ({ todo: state });

export default connect(mapState)(NewTodo);
