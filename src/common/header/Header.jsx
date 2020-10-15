import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";
import * as actionCreators from "./store/actioncreator";
import { Link } from "react-router-dom";
class Header extends Component {
  getListArea = (show) => {
    if (show) {
      return (
        <div className="hot-search">
          <div className="hot-search-title">
            <span>热门搜索</span>
            <span>换一批</span>
          </div>
          <div className="tags">
            {this.props.list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    let { focusHandler, isFocus, list, login } = this.props;
    return (
      <div id="header">
        <Link to="/">
          <img className="logo" src={require("../../static/logo.png")} alt="" />
        </Link>
        <div className="nav">
          <div className="d-flex active flex aic">
            <i
              className="iconfont icon-liulanqi"
              style={{ fontSize: "18px", marginRight: "6px" }}
            ></i>
            <span>首页</span>
          </div>
          <div className="d-flex">
            <i
              className="iconfont icon-shouji"
              style={{ fontSize: "18px", marginRight: "6px" }}
            ></i>
            下载App
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="搜索"
              className={isFocus ? "focus" : ""}
              onFocus={() => focusHandler(true, list)}
              onBlur={() => focusHandler(false)}
            />
            {this.getListArea(this.props.isFocus)}
          </div>

          <div className="d-flex" style={{ color: "#969696" }}>
            <i className="iconfont icon-Aa" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="d-flex">
            <img
              src={require("../../static/beta.png")}
              alt=""
              style={{ width: "60%" }}
            />
          </div>
          {login ? (
            <div
              className="d-flex"
              style={{ color: "#969696", textDecoration: "none" }}
            >
              退出
            </div>
          ) : (
            <Link
              to="/login"
              className="d-flex"
              style={{ color: "#969696", textDecoration: "none" }}
            >
              登录
            </Link>
          )}
        </div>
        <div className="right-nav">
          <div className="register">注册</div>
          <div className="write">
            <i className="iconfont icon-Pensyumaobi"></i>
            写文章
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFocus: state.headerReducer.isFocus,
    list: state.headerReducer.list,
    login: state.loginReducer.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    focusHandler(bl, list) {
      bl && !list.length && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus(bl));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
