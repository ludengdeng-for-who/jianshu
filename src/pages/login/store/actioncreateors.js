import * as types from "./actiontypes";
export const login = (account, password) => {
  return {
    type: types.LOGIN,
    payload: {
      account,
      password,
    },
  };
};
