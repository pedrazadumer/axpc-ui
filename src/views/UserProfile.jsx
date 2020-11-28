/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
} from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {
  renderInputComponent,
  renderSelectList,
  renderDropdownList,
} from "helpers/widgets";
import avatar from "assets/img/faces/face-3.jpg";
const dataIdentificacion = ["Cedula de ciudadania", "Tarjeta de Identidad"];
const datatipoUser = ["Exportador ", "Comprador"];
class UserProfile extends Component {
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <div className="content">
        <Grid fluid style={{ marginBottom: "6%" }}>
          <Row>
            <Col md={8}>
              <Card
                title="Editar mis datos"
                content={
                  <form
                    id="signup"
                    //style={{ margin: "10px" }}
                    //onSubmit={handleSubmit}
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
                          type="text"
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
                          type="text"
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
                        />
                      </Col>
                    </Row>
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
                      Guardar
                    </Button>
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Paul Andrew"
                userName="Paul24"
                description={
                  <span>
                    "Productor y
                    <br />
                    Exportador de productos
                    <br />
                    agricolas en Colombia"
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// Decorate the form component
UserProfile = reduxForm({
  form: "userProfile", // a unique name for this form
})(UserProfile);

export default UserProfile;
