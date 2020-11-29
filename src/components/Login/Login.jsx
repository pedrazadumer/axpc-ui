import { reduxForm, Field, SubmissionError } from "redux-form";
//import { Row } from 'react-bootstrap'
import React, { Component } from "react";
import { renderInputComponent } from "helpers/widgets";
import Button from "components/CustomButton/CustomButton.jsx";
import { connect } from "react-redux";
import SimpleSpinner from "components/Spinner/simpleSpinner";
import Card from "components/Card/Card";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
class Login extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = { code: null, digit: null, stoploading: true };
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }
  onSubmitLogin(values) {
    console.log("values", values);
    return sleep(1000).then(() => {
      // simulate server latency
      if (values) {
        if (!["john", "paul", "george", "ringo"].includes(values.username)) {
          throw new SubmissionError({
            username: "User does not exist",
            _error: "Login failed!",
          });
        } else if (values.password !== "redux-form") {
          throw new SubmissionError({
            password: "Wrong password",
            _error: "Login failed!",
          });
        } else {
          this.props.history.push("/admin/user");
          // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }
      }
    });
    //this.setState({ stoploading: false });
    /*
    return this.props.login(params).catch(response => {
      this.setState({ stoploading: true })
      if (response && response.error) {
        this.updateCanvas()
        throw new SubmissionError({
          password: response.error,
          _error: 'Error al ingresar el usuario y/o contraseña!'
        })
      }*/

    // setTimeout(this.setState({ stoploading: true }), 5000);
  }
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;

    return (
      <div
        style={{
          marginTop: "2%",
          marginLeft: "5%",
        }}
      >
        <SimpleSpinner spin={!this.state.stoploading} />
        <Card
          title="Ingrese a su cuenta"
          ctTableFullWidth
          ctTableResponsive
          content={
            <form
              id="login"
              style={{ margin: "10px" }}
              onSubmit={handleSubmit((val) => this.onSubmitLogin(val))}
            >
              <Field
                name="username"
                label="Username"
                component={renderInputComponent}
                type="text"
                placeholder="Username"
              />
              <Field
                name="password"
                label="Password"
                component={renderInputComponent}
                type="password"
                placeholder="Password"
              />
              {error && <p style={{ marginLeft: "25px" }}>{error}</p>}
              <Button
                bsStyle="primary"
                fill
                style={{ width: "100%", marginTop: "10px" }}
                color={"#3366cc"}
                disabled={!valid || pristine || submitting}
                type="submit"
              >
                Ingresar
              </Button>
              <a style={{ marginTop: "3px" }} href="https://uniandes.edu.co/">
                Olvidó su contraseña?
              </a>
            </form>
          }
        ></Card>
      </div>
    );
  }
}

const validate = ({ username, password }) => {
  const errors = {};
  if (!username) {
    errors.username = "Required";
  }
  if (!password) {
    errors.password = "Required";
  }
  return errors;
};
const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  //login: user => dispatch(logon(user)),
});
// Decorate with redux-form
const LoginWithForm = reduxForm({ form: "login" })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithForm);
