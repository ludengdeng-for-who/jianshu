import React, { Component } from "react";
import Header from "./common/header/Header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/detail/:id" component={Detail}></Route>
            </BrowserRouter>
        </Provider>
      </>
    );
  }
}
