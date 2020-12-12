import { post } from './util'
import $ from "jquery";


var { domain } = window
export function getProducers() {
	return dispatch => {
	fetch(`${domain}${"api/v1/productores"}`).then(resp => resp.json()).then(data => {
		console.log("fata", data)
		dispatch({
			type: 'List',
			payload: {
				data: data}
		})
		return data
	}).catch(error => console.log("errror", error))
	}
}
export function registerProducer(data) {
	console.log("data", data)
	var data = {
		"identificacion": "12345678",
		"tipoIdentificacion": "C",
		"primerNombre": "Daniela",
		"segundoNombre": "Sofia",
		"primerApellido": "Rojas",
		"segundoApellido": "Salazar",
		"correo": "daniel@tucorreo.com",
		"clave": "clave1234",
		"telefono": "4325423",
		"direccion": "avenida el dorado # 45 - 65",
		"departamento": "Cundinamarca",
		"ciudad": "Bogota",
		"productos": [{ "codigo": 1, "nombre": "frutas" }]
	}
	console.log("dataToSend", data)
	var url = "api/v1/productores/daniela_rojas"
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