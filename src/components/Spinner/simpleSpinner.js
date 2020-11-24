import React, { Component } from 'react'
import LoadingSpinner from 'react-spinkit'
import { connect } from 'react-redux'

class Spinner extends Component {
	render() {
		if (this.props.spin) {
			return (
				<div className="content-spinner">
					<LoadingSpinner
						className="loading-spinner"
						name={ 'folding-cube'}
						color="#a5b7ef"
					/>
				</div>
			)
		}
		return null
	}
}
const mapStateToProps = ({ ui }) => ({ ui })

const ConnectedSpinner = connect(mapStateToProps)(Spinner)

export default ConnectedSpinner
