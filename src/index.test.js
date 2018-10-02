import deepFreeze from "deep-freeze";
import { todos } from "./reducers/todos";
import { visibilityFilter } from "./reducers/visibilityFilter";
import { addTodo, toggleTodo, setVisibilityFilter } from "./actionCreators";

it("adds todo", () => {
  const stateBefore = [];
  const stateAfter = [
    {
      id: 1,
      text: "HELLO",
      completed: false
    }
  ];

  deepFreeze(stateBefore);
  ///
  expect(todos(stateBefore, addTodo("HELLO"))).toEqual(stateAfter);
});

it("toggles todo", () => {
  const stateBefore = [
    {
      id: 1,
      text: "HELLO",
      completed: false
    },
    {
      id: 2,
      text: "HELLO",
      completed: false
    }
  ];
  const stateAfter = [
    {
      id: 1,
      text: "HELLO",
      completed: true
    },
    {
      id: 2,
      text: "HELLO",
      completed: false
    }
  ];

  deepFreeze(stateBefore);

  expect(todos(stateBefore, toggleTodo(1))).toEqual(stateAfter);
});

it("changes visibilityfilter", () => {
  const stateBefore = "SHOW_ALL";

  const stateAfter = "SHOW_COMPLETED";

  deepFreeze(stateBefore);
  expect(
    visibilityFilter(stateBefore, setVisibilityFilter("SHOW_COMPLETED"))
  ).toEqual(stateAfter);
});
