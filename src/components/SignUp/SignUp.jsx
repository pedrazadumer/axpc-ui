import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { renderInputComponent } from "helpers/widgets";
import Button from "components/CustomButton/CustomButton.jsx";
import { connect } from "react-redux";
import SimpleSpinner from "components/Spinner/simpleSpinner";
class SignUp extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = { code: null, digit: null, stoploading: false };
  }
  render() {
    const {
      error,
      handleSubmit,
      pristine,
      submitting,
      valid,
      //user
    } = this.props;
    return (
      <form
        id="login"
        onSubmit={handleSubmit((values) => this.onSubmit(values))}
      >
        <SimpleSpinner spin={!this.state.stoploading} />
        <p>Registre su cuenta</p> <strong className="lineLong"></strong>¿
        <Field
          name="username"
          label="Usuario"
          component={renderInputComponent}
          type="text"
          placeholder="Usuario" //{I18n.t('components.login.username')}
          hasFeedback
        />
        <Field
          name="password"
          label="Contraseña"
          component={renderInputComponent}
          type="password"
          placeholder="Contraseña" //{I18n.t('components.login.password')}
          hasFeedback
        />
        {error && <p style={{ marginLeft: "25px" }}>{error}</p>}
        <div className="formGroup" style={{ height: "100px" }}>
          <Button
            bsStyle="default"
            fill
            style={{ width: "100%" }}
            disabled={!valid || pristine || submitting}
            color={
              this.props.companyInfo
                ? this.props.companyInfo.COMPANY_COLOR
                : null
            }
            type="submit" /*onClick={() => { this.props.history.push('/dashboard')}}*/
          >
            Ingresar
          </Button>
          <a href="https://uniandes.edu.co/">Olvidó su contraseña?</a>
        </div>
      </form>
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
const SignUpWithForm = reduxForm({ form: "SignUp", validate })(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWithForm);
