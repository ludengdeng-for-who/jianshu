import * as types from "./actionTypes";
import axios from "axios";
export const searchFocus = (bl) => ({
  type: types.FOCUS,
  payload: {
    bl,
  },
});

export const getList = () => {
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/headerlist.json");
    dispatch(changeList(data));
  };
};

const changeList = (data) => ({
    type: types.CHANGE_LIST,
    data
  });