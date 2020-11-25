import React, { Component } from "react";
//import loadable from "@loadable/component";
import { connect } from "react-redux";
//import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
//import { REACT_APP_DOMAIN } from "config";
import Login from "components/Login/Login";
import SignUp from "components/SignUp/SignUp";
import { Route } from "react-router-dom";
import HeaderLogin from "components/Navbars/HeaderLogin";
import Footer from "components/Footer/Footer";
import dashboardRoutes from "routes/index.jsx";
//const ClickableField = loadable(() => import('components/ClickableField'))
class Authentication extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      login: true,
      companyInfo: null,
    };
    this.switchAuthentication = this.switchAuthentication.bind(this);
  }
  switchAuthentication() {
    let login = !this.state.login;
    this.setState({ login });
  }
  getRoutes = (dashboardRoutes) => {
    return dashboardRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < dashboardRoutes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          dashboardRoutes[i].layout + dashboardRoutes[i].path
        ) !== -1
      ) {
        return dashboardRoutes[i].name;
      } else if (
        this.props.location.pathname.indexOf(dashboardRoutes[i].path) !== -1
      )
        return dashboardRoutes[i].name;
    }
    return "Brand";
  };
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  options() {
    if (this.state.login)
      return (
        <Login
          key="Login"
          history={this.props.history}
          switchAuthentication={this.switchAuthentication}
          companyInfo={this.state.companyInfo}
        />
      );
    else
      return (
        <SignUp
          key="SignUp"
          history={this.props.history}
          showDBSettings={this.showDBSettings}
          switchAuthentication={this.switchAuthentication}
        />
      );
  }
  render() {
    return (
      <div>
        <HeaderLogin
          {...this.props}
          style={{ backgroundColor: "#3366cc" }}
          brandText={this.getBrandText(this.props.location.pathname)}
        />
        <div style={{ marginLeft: "5%" }}>
          <p> Bienvenido a AgroExportaciones para Colombia</p>
        </div>
        {this.options()}
        <Footer style={{ backgroundColor: "#3366cc" }} />
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    user: store.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
