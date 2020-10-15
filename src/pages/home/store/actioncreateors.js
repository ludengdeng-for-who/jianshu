import axios from "axios";
import * as types from "./actiontypes";
export const getMainList = () => {
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/mainlist.json");
    dispatch(changeMainList(data));
  };
};

export const getTopicList = () => {
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/topiclist.json");
    dispatch(changeList(data));
  };
};
export const getRecommendList = () => {
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/recommendlist.json");
    dispatch(changeRecommendList(data));
  };
};
export const getWriterList = () => {
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/writerlist.json");
    dispatch(changeWriterList(data));
  };
};
export const loadMore = ()=>{
  return async (dispatch) => {
    const {
      data: { data },
    } = await axios.get("/api/mainlist.json");
    dispatch(loadMoreList(data));
  };
}
export const backTop = (flag)=>{
  return {
    type:types.FLAG,
    payload:{flag}
  }
}
const changeWriterList = (data) => {
  return {
    type: types.CHANGE_WRITER_LIST,
    data,
  };
};
const changeList = (data) => {
  return {
    type: types.CHANGE_TOPIC_LIST,
    data,
  };
};
const changeMainList = (data) => {
  return {
    type: types.CHANGE_MAIN_LIST,
    data,
  };
};
const changeRecommendList = (data) => {
  return {
    type: types.CHANGE_RECOMMEND_LIST,
    data,
  };
};
const loadMoreList = (data)=>{
  return {
    type: types.LOADMORE_LIST,
    data,
  };
}
