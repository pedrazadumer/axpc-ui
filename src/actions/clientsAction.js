import { post } from './util'
import $ from "jquery";


var { domain } = window
export function registerProducer(data) {
	console.log("data", data)
	var data = {
		identificacion: "12345678",
		tipoIdentificacion: "C",
		primerNombre: "Daniel",
		segundoNombre: "Camilo",
		primerApellido: "Rojas",
		segundoApellido: "Salazar",
		correo: "daniel@tucorreo.com",
		clave: "clave1234",
		telefono: "4325423",
		direccion: "avenida el dorado # 45 - 65",
		departamento: "Cundinamarca",
		ciudad: "Bogota",
		productos: [{ codigo: 1, nombre: "frutas" }]
	}
	console.log("dataToSend", data)
	var url = "api/v1/productores/daniel_rojas"
	return dispatch => {
		return post({ url: url, data, dispatch ,extra_parameters: { method: 'PUT' }}).then(function(
			response
		) {
			if (response) {
				console.log("response", response)
				/*dispatch({
					type: 'ADD_PAGE5_RULE',
					payload: {
						data: data.varName,
						response:response.var_value==='1'? true:response.var_value==='0'?false:response.var_value
					}
				})*/
			}
		})
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