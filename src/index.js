import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Filters from "./containers/Filters";

import reducers from "./reducers/index";

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Filters />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
