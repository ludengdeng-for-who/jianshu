import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as actionCreateors from "../store/actioncreateors";

class Writer extends PureComponent {
  componentDidMount() {
    this.props.getList();
  }
  
  render() {
    let { list } = this.props;
    return (
      <div id="writer">
        <div className="top">
          <div>推荐作者</div>
          <div>换一批</div>
        </div>
        {list.map((item) => {
          return (
            <div className="writer-item" key={item.id}>
              <img src={item.img} alt="" className="avatar" />
              <div className="info">
                <div>{item.title}</div>
                <div className="words">{item.words}</div>
              </div>
              <div className="care">关注</div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.homeReducer.writerList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      dispatch(actionCreateors.getWriterList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Writer);
