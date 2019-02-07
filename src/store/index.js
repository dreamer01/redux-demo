import { createStore, compose } from "redux";

const initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload]
      };
    case "DELETE_USER":
      return {
        ...state,
        users: [...state.users.filter(user => user !== action.payload)]
      };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers();

const store = createStore(reducer, enhancer);

export default store;
