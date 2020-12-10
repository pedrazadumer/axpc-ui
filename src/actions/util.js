//import { decryptPayload } from 'helpers/encryption'
//import { I18n } from 'react-redux-i18n'
//import { REACT_APP_DOMAIN } from 'config'
import $ from "jquery";
var { domain } = window
export function catchError(argument) {
	return error => console.error('(util) Error catched: ', { error })
}
const log = logee => {
	//eslint-disable-next-line
	// console.log(logee)
}

export async function post({ url, data, dispatch, extra_parameters }) {
	let params = { ...data }
	
	return new Promise((resolve, reject) => {
		$.ajax({
			type: 'POST',
			url: `${domain}${url}`,
			data:
				data !== undefined && typeof data.entries === 'function'
					? data
					: params,
			...extra_parameters
		})
			.done(resolve)
			.catch(reject)
	})
		.then(async response => {
			/*if (response.error) {
				const error = {
					status: 400,
					responseJSON: { Message: "error" } //{ Message: response.dxn_error }
				}
				throw error
			} */
			//log(`[POST] response to ${url}`, { response })
			if (response) {
				return response
				
			} else return undefined
		})
		.catch(async response => {
			//log(`[!POST!] request to ${url} failed`, { response })
			console.log('response catch', response)
			/*if (response && response.status && response.responseJSON) {
				const { responseJSON } = response
				const message = responseJSON.Message || ':'
				//console.log('message2', message)
				if (
					message.includes('User not logged into application.') ||
					message.includes('session mismatch') ||
					message.includes('session expired')
				) {
					dispatch({
						type: 'NEW_NOTIFICATION',
						notification: {
							message: 'Su sesión ha expirado' || message,
							level: 'error',
							position: 'bc'
						}
					})
					setTimeout(_ => (window.location.pathname = '/login'), 1500)
				} else if (message.includes('No database'))
					dispatch({
						type: 'NEW_NOTIFICATION',
						notification: {
							message: message,
							level: 'error',
							position: 'bc'
						}
					})
				/*else {
					dispatch({
						type: 'NEW_NOTIFICATION',
						notification: {
							message: message,
							level: 'error',
							position: 'bc'
						}
					})
				}
				throw response
			}*/
		})
}
