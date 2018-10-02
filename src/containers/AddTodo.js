import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actionCreators";

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <React.Fragment>
      <input name="addTodo" type="text" ref={node => (input = node)} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
        }}
      >
        add
      </button>
    </React.Fragment>
  );
};

AddTodo = connect()(AddTodo);
export default AddTodo;
