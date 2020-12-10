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
import avatar from "assets/img/faces/face-3.jpg";
import {
  renderInputComponent,
  renderSelectList,
  renderDropdownList,
  renderNumberPicker,
  renderImage,
} from "helpers/widgets";
import defaultAvatar from "assets/img/imageDefault.png";
const dataIdentificacion = ["Cedula de ciudadania", "Tarjeta de Identidad"];
const datatipoUser = ["Exportador ", "Comprador"];

class CreateProducts extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = { file: null };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    //console.log("event", event);
    //console.log("window", window);
    const mediaStream = new MediaStream();
    const image = { url: event }; // document.getElementById("productImage");
    //console.log("image", image);
    image.srcObject = mediaStream;
    this.setState({
      file: image,
    });
    //event.target.files[0]
  }
  render() {
    const { error, handleSubmit, pristine, submitting, valid } = this.props;
    const number = (value) =>
      value && isNaN(Number(value)) ? "Must be a number" : undefined;
    let picture = defaultAvatar;
    return (
      <div className="content">
        <Grid fluid style={{ marginBottom: "8%" }}>
          <Row>
            <Col md={12}>
              <Card
                title="Creacion de productos"
                content={
                  <form
                    id="signup"
                    style={{ margin: "5%" }}
                    //onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col md={6}>
                        <Field
                          name="productName"
                          label="Nombre de producto"
                          component={renderInputComponent}
                          type="text"
                          placeholder="Nombre"
                        />
                      </Col>
                      <Col md={6}>
                        <Field
                          name="pricekg"
                          label="Precion en kg"
                          component={renderInputComponent}
                          placeholder="Precio en kg"
                          type="number"
                          defaultValue={1}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Field
                          name="precioTon"
                          label="Precio en Toneladas"
                          component={renderInputComponent}
                          placeholder="Precio x toneladas"
                          type="number"
                          defaultValue={1}
                        />
                      </Col>
                      <Col md={6}>
                        <Field
                          name="cantidadProme"
                          label="Cantidad Promedio produccion al mes en kg"
                          component={renderInputComponent}
                          type="text"
                          placeholder="Cantidad Promedio produccion al mes en kg"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Field
                          name="productImage"
                          label="Agregar Imagen"
                          component={renderImage}
                          src={this.state.file || picture}
                          alt="productImage"
                          type="file"
                          onChange={this.handleChange}
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
          </Row>
        </Grid>
      </div>
    );
  }
}

// Decorate the form component
CreateProducts = reduxForm({
  form: "createProducts", // a unique name for this form
})(CreateProducts);

export default CreateProducts;
