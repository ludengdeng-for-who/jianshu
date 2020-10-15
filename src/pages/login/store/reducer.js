import * as types from "./actiontypes";

const defaultState = {
  login: false,
};
export default (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.LOGIN:
      newState = Object.create(state);
      if (
        action.payload.account !== "admin" ||
        action.payload.password !== "123456"
      ) {
        newState.login = false;
      } else {
        newState.login = true;
      }
      return newState;
    default:
      return state;
  }
};
