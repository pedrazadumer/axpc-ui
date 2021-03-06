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
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid style={this.props.style}>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/admin/products">Inicio</a>
              </li>
              <li>
                <a
                  href="https://www.minagricultura.gov.co/paginas/default.aspx"
                  target="_blank"
                >
                  Patrocina
                </a>
              </li>
              <li>
                <a href="https://uniandes.edu.co/" target="_blank">
                  Uniandes
                </a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.minagricultura.gov.co/paginas/default.aspx"
              target="_blank"
            >
              Ministerio de agricultura y desarrollo rural
            </a>
            , Ministerio de Tecnologías de la Información y las Comunicaciones
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
