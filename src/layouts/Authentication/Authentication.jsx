import React, { Component } from "react";
//import loadable from "@loadable/component";
import { connect } from "react-redux";
//import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
//import { REACT_APP_DOMAIN } from "config";
import Login from "components/Login/Login";
import SignUp from "components/SignUp/SignUp";
import { Route } from "react-router-dom";
import HeaderLogin from "components/Navbars/HeaderLogin";
import { registerProducer } from "actions/clientsAction"
import Footer from "components/Footer/Footer";
import dashboardRoutes from "routes/index.jsx";
import { Row, Col } from "react-bootstrap";
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
    //console.log("entroo switchAuthentication");
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
  submit = (values) => {
    // Do something with the form values
    console.log("registro", values);
    this.props.registerProducer(values).then(resp => console.log("resp", resp))
  };
  options() {
    if (this.state.login)
      return (
        <div style={{ minHeight: "76vh" }}>
          <Row>
            <Col md={1}></Col>
            <Col md={4}>
              <Login
                key="login"
                history={this.props.history}
                companyInfo={this.state.companyInfo}
              />
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <img
                src="../../Images/AgroE.jpg"
                style={{
                  width: "70%",
                  height: "60%",
                  marginLeft: "10%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            </Col>
          </Row>
        </div>
      );
    else
      return (
        <div style={{ minHeight: "76vh" }}>
          <Row>
            <Col md={12}>
              <SignUp
                key="signup"
                onSubmit={this.submit}
                history={this.props.history}
              />{" "}
            </Col>
          </Row>
        </div>
      );
    /* else
    return (
      <SignUp
        key="SignUp"
        {...this.props}
        history={this.props.history}
        showDBSettings={this.showDBSettings}
        switchAuthentication={this.switchAuthentication}
      />
    );*/
  }
  render() {
    return (
      <div>
        <HeaderLogin
          {...this.props}
          style={{ backgroundColor: "#3366cc", height: "60px" }}
          brandText={this.getBrandText(this.props.location.pathname)}
          switchAuthentication={this.switchAuthentication}
        />
        <div style={{ marginLeft: "5%" }}>
          <h4> Bienvenido a AgroExportaciones para Colombia</h4>
        </div>
        {this.options()}
        <Footer
          style={{
            backgroundColor: "#3366cc",
            paddingBottom: "0px",
          }}
        />
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
  return { registerProducer: obj => dispatch(registerProducer(obj)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
