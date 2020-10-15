import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreateors from "../store/actioncreateors";

class Topic extends PureComponent {
  componentDidMount() {
    this.props.getList();
  }
  render() {
    let { list } = this.props;
    return (
      <div id="topic">
        {list.map((item) => {
          return (
            <div className="topic-item" key={item.id}>
              {item.title}
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.homeReducer.topicList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreateors.getTopicList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topic);
