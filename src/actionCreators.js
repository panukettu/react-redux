let nextTodoId = 0;

export const addTodo = value => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text: value
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id: id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter: filter
});
