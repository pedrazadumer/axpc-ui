import React, { Component } from "react";
import LoadingSpinner from "react-spinkit";
import { connect } from "react-redux";

class Spinner extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = { spinning: false };
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }

  startLoading() {
    this.setState({ spinning: true });
  }

  stopLoading() {
    this.setState({ spinning: false });
  }

  render() {
    return (
      <div className={this.state.spinning ? "content-spinner" : ""}>
        {this.state.spinning && (
          <LoadingSpinner
            className="loading-spinner"
            name={this.props.ui.spinner || "folding-cube"}
            color="#a5b7ef"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ ui }) => ({ ui });

const ConnectedSpinner = connect(mapStateToProps, null, null, {
  forwardRef: true,
})(Spinner);

export default ConnectedSpinner;
