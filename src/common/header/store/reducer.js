import * as types from "./actionTypes";

const defaultState = {
  isFocus: false,
  list: [],
};
export default (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.FOCUS:
      newState = Object.create(state);
      newState.isFocus = action.payload.bl;
      return newState;
    case types.CHANGE_LIST:
      newState = Object.create(state);
      newState.list = action.data;
      return newState;
    default:
      return state;
  }
};
