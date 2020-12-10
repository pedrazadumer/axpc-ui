import React, { Component } from "react";
import { Modal as ModalB, Button } from "react-bootstrap";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, classToUse: "custom-modal" };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleExpand = this.handleExpand.bind(this);
    //this.handleTranslateX = this.handleTranslateX.bind(this);
  }
  handleClose() {
    this.setState({ show: false });
    if (this.props.error && this.props.history) this.props.history.goBack();
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const { content, showFooter } = this.props;
    return (
      <ModalB
        show={this.state.show}
        onHide={this.handleClose}
        className={this.state.classToUse}
      >
        <ModalB.Header
          style={{
            padding: "5px",
            paddingRight: "10px",
          }}
          //closeButton
        >
          <ModalB.Title style={{ textAlign: "center" }}>
            <strong>{this.props.title}</strong>
          </ModalB.Title>
        </ModalB.Header>
        <ModalB.Body>{content}</ModalB.Body>
        {showFooter && (
          <ModalB.Footer>
            <Button onClick={this.handleClose}>Cerrar</Button>
          </ModalB.Footer>
        )}
      </ModalB>
    );
  }
}

export default Modal;
