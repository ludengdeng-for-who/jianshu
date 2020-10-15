import React, { PureComponent } from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import * as actionCreateors from "./store/actioncreateors";

import "./home.scss";
class Home extends PureComponent {
  componentDidMount() {
    window.addEventListener("scroll", this.props.backTop);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.backTop);
  }
  goTop = () => {
    document.documentElement.scrollTop = 0;
  };
  render() {
    return (
      <div id="home">
        <div className="left">
          <img
            src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2956999.jpg?max_age=2592000"
            alt=""
          />
          <Topic />
          <List />
        </div>
        <div className="right">
          <Recommend />
          <Writer />
        </div>
        {this.props.show ? (
          <div className="backtop" onClick={this.goTop}>
            返回顶部
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.homeReducer.topShow,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    backTop(e) {
      let y = document.documentElement.scrollTop;
      if (y > 500) {
        dispatch(actionCreateors.backTop(true));
      } else {
        dispatch(actionCreateors.backTop(false));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
