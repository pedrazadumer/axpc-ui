import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  renderInputComponent,
  renderSelectList,
  renderDropdownList,
  renderCheckboxComponent,
} from "helpers/widgets";
import SimpleSpinner from "components/Spinner/simpleSpinner";
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card";
import { Row, Col } from "react-bootstrap";
const dataIdentificacion = ["Cedula de ciudadania", "Tarjeta de Identidad"];
const datatipoUser = ["Exportador ", "Comprador"];
class SignUp extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      code: null,
      digit: null,
      stoploading: true,
      showProductOps: false,
    };
    this.tipoUsuario = this.tipoUsuario.bind(this);
  }
  tipoUsuario(val) {
    if (val.includes("Exportador")) {
      this.setState({ showProductOps: true });
    } else this.setState({ showProductOps: false });
  }
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;

    return (
      <div style={{ marginLeft: "2vw", marginRight: "2vw" }}>
        <SimpleSpinner spin={!this.state.stoploading} />
        <Card
          title="Registrese"
          ctTableFullWidth
          ctTableResponsive
          content={
            <form
              id="signup"
              style={{ margin: "10px" }}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={6}>
                  <Field
                    name="firstname"
                    label="Nombres"
                    component={renderInputComponent}
                    type="text"
                    placeholder="Ingrese su nombre"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="lastname"
                    label="Apellidos"
                    component={renderInputComponent}
                    type="text"
                    placeholder="Ingrese sus apellidos"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Field
                    name="celular"
                    label="Número de celular"
                    component={renderInputComponent}
                    type="number"
                    placeholder="Ingrese su numero celular"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="departamento"
                    label="Departamento"
                    component={renderInputComponent}
                    type="text"
                    placeholder="Ingrese Departamento"
                  />{" "}
                </Col>{" "}
              </Row>
              <Row>
                <Col md={6}>
                  <Field
                    name="ciudad"
                    label="ciudad"
                    component={renderInputComponent}
                    type="text"
                    placeholder="Ingrese ciudad"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="direccion"
                    label="Dirección"
                    component={renderInputComponent}
                    type="text"
                    placeholder="Ingrese su dirección"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Field
                    name="tipoDoc"
                    label="Tipo de identifiación"
                    component={renderDropdownList}
                    data={dataIdentificacion}
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="numDoc"
                    label="Número de identifiación"
                    component={renderInputComponent}
                    type="number"
                    placeholder="Ingrese su número de identificación"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Field
                    name="email"
                    label="Correo electrónico"
                    component={renderInputComponent}
                    type="email"
                    placeholder="Ingrese sus correo"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="tipoUsuario"
                    label="Tipo de usuario"
                    component={renderDropdownList}
                    data={datatipoUser}
                    onChange={(val) => this.tipoUsuario(val)}
                  />
                </Col>
              </Row>
              {this.state.showProductOps && (
                <Row style={{ marginLeft: "15px" }}>
                  <p>Tipo de productos:</p>
                  <Col md={2}>
                    <Field
                      name="Frutas"
                      label="Frutas"
                      component={renderCheckboxComponent}
                      type="checkbox"
                      style={{
                        marginLeft: "20px",
                        width: "20px",
                        padding: "0px",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <Field
                      name="Verduras"
                      label="Verduras"
                      component={renderCheckboxComponent}
                      type="checkbox"
                      style={{
                        marginLeft: "20px",
                        width: "20px",
                        padding: "0px",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <Field
                      name="Granos"
                      label="Granos"
                      component={renderCheckboxComponent}
                      type="checkbox"
                      style={{
                        marginLeft: "20px",
                        width: "20px",
                        padding: "0px",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <Field
                      name="Otros"
                      label="Otros"
                      component={renderCheckboxComponent}
                      type="checkbox"
                      style={{
                        marginLeft: "20px",
                        width: "20px",
                        padding: "0px",
                      }}
                    />
                  </Col>
                  <Col md={4}></Col>
                </Row>
              )}
              <Row>
                <Col md={6}>
                  <Field
                    name="password"
                    label="Contaseña"
                    component={renderInputComponent}
                    type="password"
                    placeholder="Ingrese nueva contraseña"
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="passwordVerif"
                    label="Confirmar contaseña"
                    component={renderInputComponent}
                    type="password"
                    placeholder="Confirme su contraseña"
                  />
                </Col>
              </Row>
              {error && <p style={{ marginLeft: "25px" }}>{error}</p>}
              <Button
                bsStyle="primary"
                fill
                style={{ width: "100%", marginTop: "10px" }}
                color={"#3366cc"}
                disabled={!valid || pristine || submitting}
                type="submit"
              >
                Registarse
              </Button>
            </form>
          }
        ></Card>
      </div>
    );
  }
}

// Decorate the form component
SignUp = reduxForm({
  form: "signup", // a unique name for this form
})(SignUp);

export default SignUp;
