import React from "react";
import { Provider, connect } from "react-redux";
import { toggleTodo } from "../actionCreators";

const Todo = ({ onClick, text, completed }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text} {completed && "✅"}
  </div>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo} />
    ))}
  </ul>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL": {
      return todos;
    }
    case "SHOW_COMPLETED": {
      return todos.filter(todo => todo.completed);
    }
    case "SHOW_ACTIVE": {
      return todos.filter(todo => !todo.completed);
    }
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
