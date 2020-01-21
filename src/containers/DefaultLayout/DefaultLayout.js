import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "reactstrap";

// sidebar nav config

import { isLarge } from "../../store/actions";
// routes config
import routes from "../../routes";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div id="wrapper" className="app">
        <Suspense fallback={this.loading()}>
          <DefaultHeader onLogout={e => this.signOut(e)} />
        </Suspense>

        <Suspense fallback={this.loading()}>
          <div className="left side-menu">
            {this.props.is_large_state ? (
              <DefaultAside />
            ) : (
              <PerfectScrollbar>
                <DefaultAside />
              </PerfectScrollbar>
            )}
          </div>
        </Suspense>

        <div className="content-page">
          <div className="content">
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
            {this.props.children}
          </div>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  const { is_large_state, layout } = state.Layout;
  return { layout, is_large_state };
};

export default withRouter(connect(mapStatetoProps, { isLarge })(DefaultLayout));
