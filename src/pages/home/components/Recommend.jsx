import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreateors from "../store/actioncreateors";

class Recommend extends PureComponent {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    let { list } = this.props;
    return (
      <>
        <div id="recommend">
          {list.map((item) => {
            return <img src={item} alt="" key={item} />;
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.homeReducer.recommendList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreateors.getRecommendList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
