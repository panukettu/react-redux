import { todos } from "./todos";
import { visibilityFilter } from "./visibilityFilter";

const combineReducers = reducers => (state = {}, action) =>
  Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});

const reducers = combineReducers({ todos, visibilityFilter });

export default reducers;
