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
import { Grid, Row, Col, Table } from "react-bootstrap";
import ReactTable from "react-table";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

const data = [
  { producto: "Papa", precioEnKg: "15.000", precioTon: "100.000" },
  { producto: "Arroz", precioEnKg: "15.000", precioTon: "100.000" },
  { producto: "Tomate", precioEnKg: "15.000", precioTon: "100.000" },
];
const columnsList = ["producto", "precioEnKg", "precioTon"];
const captions = ["Producto", "Precio en kg", "Precio en Toneladas"];
class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: null,
      data: null,
    };

    this.getDataAndColumns = this.getDataAndColumns.bind(this);
    this.getDataAndColumns();
  }
  componentDidMount() {
    this.getDataAndColumns();
  }

  getDataAndColumns() {
    const records = data;
    const columns = columnsList;
    const caption = captions;
    if (!records || !columns) {
      this.setState({ ShowNoTicketsMessage: true });
      return;
    }
    const defaultColumns = (columns || []).map((column, i) => {
      return {
        Header: caption && caption[i] ? caption[i] : column,
        accessor: column,
        //style: { whiteSpace: "unset" },
      };
    });

    this.setState({
      columns: defaultColumns,
      data: records,
      ShowNoTicketsMessage: false,
    });
  }
  render() {
    const { columns, data } = this.state;
    console.log("columns", columns);
    console.log("data", data);
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Resumen productos"
                category="Resumen de productos registrados"
                ctTableFullWidth
                ctTableResponsive
                content={
                  columns && (
                    <div style={{ marginLeft: "15%" }}>
                      <ReactTable
                        data={data}
                        columns={columns}
                        defaultPageSize={20}
                        style={{
                          overflow: "wrap",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          wordWrap: "break-word",
                        }}
                        className="-striped -highlight wordwrap"
                      />
                    </div>
                  )
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductTable;
