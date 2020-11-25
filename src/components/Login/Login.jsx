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
      console.log("values", values);
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
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
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
    this.props.history.push("/admin/dashboard");
    // setTimeout(this.setState({ stoploading: true }), 5000);
  }
  setVal(value) {
    // console.log("setVal", value);
  }
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;
    console.log("pristine", pristine);
    console.log("submitting", submitting);
    console.log("valid", valid);
    return (
      <div
        style={{
          minHeight: "80%",
          width: "40%",
          marginLeft: "10%",
          marginTop: "10%",
          marginBottom: "13%",
        }}
      >
        <SimpleSpinner spin={!this.state.stoploading} />
        <Card
          title="Ingrese a su cuenta"
          ctTableFullWidth
          ctTableResponsive
          content={
            <form
              id="Login"
              style={{ margin: "10px" }}
              onSubmit={handleSubmit((values) => this.onSubmitLogin(values))}
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
                style={{ width: "100%" }}
                color={"#3366cc"}
                //disabled={!valid || pristine || submitting}
                type="submit"
              >
                Ingresar
              </Button>
              <a href="https://uniandes.edu.co/">Olvidó su contraseña?</a>
            </form>
          }
        ></Card>
      </div>
    );
  }
}

const validate = ({ username, password }) => {
  console.log("username", username);
  console.log("password", password);
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
const LoginWithForm = reduxForm({ form: "Login" })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithForm);
