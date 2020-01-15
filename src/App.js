import React, { Component } from "react";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Loadable from "react-loadable";

import routes from "./routes";
import "./custom.css";
import "./App.scss";
import { isUserAuthenticated } from "./helpers/authUtils";
import fakeBackend from "./helpers/fakeBackend";
fakeBackend();

const loading = () => (
  <div className="animated fadeIn pt-3 text-center"> Loading... </div>
);

// Containers
const DefaultLayout = Loadable({
  loader: () => import("./containers/DefaultLayout"),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import("./views/Login"),
  loading
});

const Register = Loadable({
  loader: () => import("./views/Register"),
  loading
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        <Route
          exact
          path="/register"
          name="Register Page"
          component={Register}
        />
        {/*<Route exact path="/404" name="Page 404" component={Page404}/>*/}
        {/*<Route exact path="/500" name="Page 500" component={Page500}/>*/}
        <Route path="/" name="Home" component={DefaultLayout} />
      </Switch>
    );
  }
}

export default withRouter(App);
