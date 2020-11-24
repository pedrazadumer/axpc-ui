import React, { Component } from "react";
import { reduxForm, Field } from "redux-form"; //SubmissionError
import { renderInputComponent } from "helpers/widgets";
import Button from "components/CustomButton/CustomButton.jsx";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import SimpleSpinner from "components/Spinner/simpleSpinner.js";
class Login extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = { code: null, digit: null, stoploading: true };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(values) {
    console.log("values", values);
    console.log("this, props", this.props);
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
              onSubmit={handleSubmit((values) => this.onSubmit(values))}
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
const LoginWithForm = reduxForm({ form: "Login", validate })(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithForm);
