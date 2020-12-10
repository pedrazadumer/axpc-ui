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
	console.log("data", data)
	var url = "api/v1/productores/daniel_rojas"
	console.log("window", window)
	return async dispatch => {
		return new Promise((resolve, reject) => {
			$.ajax({
				type: 'PUT',
				url: `${domain}${url}`,
				data: data,
				headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/servicio-clientes/' },
				beforeSend: function (request) {
					request.setRequestHeader("Authorization", "Negotiate");
				},
				crossOrigin: true,
				crossDomain: true,
				//accepts: "application/json",
				/*data !== undefined && typeof data.entries === 'function'
					? data
					: params,*/
				//...extra_parameters
			})
				.done(resolve)
				.catch(reject)
		})
			.then(async response => {
				console.log("response", response)
				if (response) {
					return response
				} else return undefined
			})
			.catch(async response => {
				console.log("catch", response)
			})
	}
}
export function getAllRelatedData(data) {
	return async dispatch => {
		return post({ url: 'api/DxActivity/GetRelatedData', data, dispatch }).then(
			result => {
				//console.log('GetAllRelatedData', result)
				//dispatch(handleRelatedData(result, data))
			}
		)
	}
}

export function getCategoryRelatedData(data, par) {
	return async dispatch => {
		return post({
			url: 'api/DxActivity/GetRelatedDataCfg',
			data,
			dispatch
		})
			.then(async result => {
				//console.log('GetRelatedDataCfg result', result)
				if (par) result.oldData = par
				//console.log("format",formatJson(result))
				//	await dispatch(handleRelatedData(result, data, true))
				//return formatJson(result)
			})
			.catch(error => {
				return error
			})
	}
}