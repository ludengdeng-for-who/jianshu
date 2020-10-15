import * as types from "./actiontypes";

const defaultState = {
  topicList: [],
  mainList: [],
  writerList: [],
  recommendList: [],
  topShow: false,
};
export default (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case types.CHANGE_TOPIC_LIST:
      newState = Object.create(state);
      newState.topicList = action.data;
      return newState;
    case types.CHANGE_MAIN_LIST:
      newState = Object.create(state);
      newState.mainList = action.data;
      return newState;
    case types.CHANGE_RECOMMEND_LIST:
      newState = Object.create(state);
      newState.recommendList = action.data;
      return newState;
    case types.CHANGE_WRITER_LIST:
      newState = Object.create(state);
      newState.writerList = action.data;
      return newState;
    case types.LOADMORE_LIST:
      newState = Object.create(state);
      newState.mainList = newState.mainList.concat(action.data);
      return newState;
      case types.FLAG:
      newState = Object.create(state);
      newState.topShow = action.payload.flag;
      return newState;
    default:
      return state;
  }
};
