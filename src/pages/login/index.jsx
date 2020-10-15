import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./login.scss";
import * as actionCreateors from "./store/actioncreateors";
class Login extends PureComponent {
  render() {
    let { login, loginState } = this.props;
    console.log(loginState);
    if (!loginState) {
      return (
        <div id="login">
          <div className="form">
            <div className="item">
              账号：
              <input type="text" ref={(input) => (this.account = input)} />
            </div>
            <div className="item">
              密码：
              <input type="password" ref={(input) => (this.password = input)} />
            </div>
            <div
              className="btn"
              onClick={() => login(this.account.value, this.password.value)}
            >
              登录
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreateors.login(account, password));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
