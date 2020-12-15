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
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
//import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}>
              <Card
                title="Tomate"
                category="Tomate Chonto"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/tomate.jpeg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 15.000</p>
                    <p>Precio en toneladas: 90.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Papa"
                category="Papa criolla"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/papaCriolla.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 25.000</p>
                    <p>Precio en toneladas: 100.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Cebolla"
                category="Cebolla Cabezona"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/cebollas.png"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 12.000</p>
                    <p>Precio en toneladas: 80.000</p>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                title="Uchuva"
                category="Uchuva común"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/uchua.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 15.000</p>
                    <p>Precio en toneladas: 90.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Zanahoria"
                category="Zanahoria silvestre"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/zanahoria.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 25.000</p>
                    <p>Precio en toneladas: 100.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Papa"
                category="Papa pastusa"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/papaPastusa.jpeg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 12.000</p>
                    <p>Precio en toneladas: 80.000</p>
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card
                title="Maiz"
                category="Mazorca"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/mazorca.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 35.000</p>
                    <p>Precio en toneladas: 120.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Arroz"
                category="Arroz"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/arroz.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 25.000</p>
                    <p>Precio en toneladas: 100.000</p>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Cacao"
                category="Cacao Amazónico"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div style={{ marginLeft: "15%" }}>
                    <img
                      src="../../Images/cacao.jpg"
                      height="50%"
                      width="80%"
                    />
                    <p>Precio en kg: 12.000</p>
                    <p>Precio en toneladas: 80.000</p>
                  </div>
                }
              />
            </Col>
          </Row>
          {/*<Col md={12}>
              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>*/}
        </Grid>
      </div>
    );
  }
}

export default TableList;
