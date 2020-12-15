import { post } from './util'
import $ from "jquery";


var { domain } = window
export function getProducers() {
	return dispatch => {
		fetch(`${domain}${"api/v1/productores"}`).then(resp => resp.json()).then(data => {
			console.log("response productores", data)
			dispatch({
				type: 'SET_PRODUCERS',
				payload: {
					data: data
				}
			})
			return data
		}).catch(error => console.log("errror", error))
	}
}
export function getCompradores() {
	return dispatch => {
		fetch(`${domain}${"api/v1/compradores"}`).then(resp => resp.json()).then(data => {
			console.log("data response", data)
			dispatch({
				type: 'SET_BUYERS',
				payload: {
					data: data
				}
			})
			return data
		}).catch(error => console.log("errror", error))
	}
}
export function registerProducer(data) {
	console.log("data", data)
	var url = "api/v1/productores/" + data.primerNombre + "_" + data.primerApellido
	return dispatch => {
		fetch(`${domain}${url}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(data)
		}).then(resp => resp.json()).then(response => {
			console.log("resp", response)
			if (response.usuario)
				return response
			/*dispatch({
				type: 'USER',
				payload: {
					data: response.varName,
					response: response.var_value === '1' ? true : response.var_value === '0' ? false : response.var_value
				}
			})*/
		}).catch(error => console.log("errror", error))
	}
}
export function registerCompradores(data) {
	var url = "api/v1/compradores/" + data.primerNombre + "_" + data.primerApellido
	return dispatch => {
		fetch(`${domain}${url}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			}, body: JSON.stringify(data)
		}).then(resp => resp.json()).then(response => {
			console.log("resp", response)
			dispatch({
				type: 'USER',
				payload: {
					data: response.varName,
					response: response.var_value === '1' ? true : response.var_value === '0' ? false : response.var_value
				}
			})
			return response
		}).catch(error => console.log("errror", error))
	}
}
//GET
export function getDb() {
	return dispatch => {
		return post({
			url: 'api/DBSettings/Get',
			dispatch,
			extra_parameters: { method: 'GET' }
		})
	}
}