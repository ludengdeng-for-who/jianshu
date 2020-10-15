import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreateors from "./store/actioncreateor";
import "./detail.scss";
class Detail extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    this.props.getDetail();
  }

  render() {
    let { title, content } = this.props;
    return (
      <div id="detail">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.detailReducer.detail.title,
    content: state.detailReducer.detail.content,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreateors.getDetail());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
