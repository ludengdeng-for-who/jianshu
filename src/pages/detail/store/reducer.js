import * as types from "./actiontypes";

const defaultState = {
  detail: {},
};

export const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.GETDETAIL:
      newState = state;
      newState.detail = action.payload.data;
      return newState;
    default:
      return state;
  }
};
