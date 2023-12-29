import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import Home from "./homepage/Home";
import About from "./homepage/About";
import { createBrowserHistory } from "history";
import testrouter from "./homepage/testrouter";
import HeaderMenu from "./Admin/menu/HeaderMenu";
import trangChu from "./homepage/trangChu";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
        <Switch>
          {/* <Route path="/" exact><Home/></Route> */}
          <Route path={"/"} exact component={trangChu}/>
          <Route path={"/about/"} exact component={About}/>
          <Route path={"/header"} exact component={HeaderMenu}/>
          <Route path={"/header/khachhang"} exact component={testrouter}/>

        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
