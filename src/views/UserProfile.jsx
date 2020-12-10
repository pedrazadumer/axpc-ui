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
import Spinner from "components/Spinner/simpleSpinner";
import {
  renderInputComponent,
  //renderSelectList,
  renderDropdownList,
  renderCheckboxComponent,
} from "helpers/widgets";
import avatar from "assets/img/faces/face-3.jpg";
import Modal from "helpers/Modal";
const dataIdentificacion = ["Cedula de ciudadania", "Tarjeta de Identidad"];
const datatipoUser = ["Exportador ", "Comprador"];
class UserProfile extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      stoploading: true,
      showProductOps: false,
      titleModal: "Advertencia",
      contentModal: "",
      error: false,
      loading: false,
    };
    this.tipoUsuario = this.tipoUsuario.bind(this);
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }
  tipoUsuario(val) {
    if (val.includes("Exportador")) {
      this.setState({ showProductOps: true });
    } else this.setState({ showProductOps: false });
  }
  confirmDelete(val) {
    this.modal.handleClose();
    console.log("val");
    if (val === true) {
      this.setState(
        {
          titleModal: "Advertencia",
          contentModal: "Su cuenta fue eliminada exitosamente",
          loading: true,
        },
        (_) =>
          window.setTimeout(
            this.modal.handleShow(),
            setTimeout((_) => (window.location.pathname = "/login"), 1500),
            2000
          )
      );
    }
  }
  deleteConfirmation() {
    this.setState(
      {
        titleModal: "Advertencia",
        contentModal: (
          <div>
            <Row style={{ margin: "10px" }}>
              <h4>Está seguro que desea eliminar esta cuenta?</h4>
            </Row>
            <Row>
              <Col md={6}>
                <Button
                  name="eliminar"
                  bsStyle="success"
                  style={{ width: "100%" }}
                  pullRight
                  fill
                  onClick={(_) => this.confirmDelete(true)}
                >
                  Confirmar
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  name="cancelar"
                  bsStyle="danger"
                  pullRight
                  style={{ width: "100%" }}
                  fill
                  onClick={(_) => this.modal.handleClose()}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </div>
        ),
        error: false,
      },
      (_) => this.modal.handleShow()
    );
  }
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;
    return (
      <div className="content">
        <Spinner spin={this.state.loading} />
        <Modal
          ref={(modal) => (this.modal = modal)}
          title={this.state.titleModal}
          content={<p>{this.state.contentModal}</p>}
          error={this.state.error}
          history={this.props.history}
          showFooter
        />
        <Grid fluid style={{ marginBottom: "3%" }}>
          <Row>
            <Col md={12}>
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
                          onChange={(val) => this.tipoUsuario(val)}
                        />
                      </Col>
                    </Row>
                    {this.state.showProductOps && (
                      <Row style={{ marginLeft: "5px" }}>
                        <p style={{ fontSize: "12px", fontFamily: "Roboto" }}>
                          TIPO DE PRODUCTOS
                        </p>
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
                    <Row>
                      {" "}
                      <Col md={6}>
                        <Button
                          bsStyle="primary"
                          fill
                          style={{ width: "100%", marginTop: "10px" }}
                          color={"#3366cc"}
                          disabled={!valid || pristine || submitting}
                          type="submit"
                        >
                          Guardar cambios
                        </Button>
                      </Col>
                      <Col md={6}>
                        <Button
                          bsStyle="cancel"
                          fill
                          style={{ width: "100%", marginTop: "10px" }}
                          onClick={(val) => this.deleteConfirmation(val)}
                        >
                          Eliminar cuenta
                        </Button>
                      </Col>
                    </Row>
                  </form>
                }
              />
            </Col>
            {/* <Col md={4}>
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
              </Col>*/}
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
