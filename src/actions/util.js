import { decryptPayload } from 'helpers/encryption'
import { I18n } from 'react-redux-i18n'
import { REACT_APP_DOMAIN } from 'config'

export function catchError(argument) {
	return error => console.error('(util) Error catched: ', { error })
}

const log = logee => {
	//eslint-disable-next-line
	// console.log(logee)
}

export async function post({ url, data, dispatch, extra_parameters }) {
	let params = { ...data }
	var token = ''
	var decryptPass = ''
	if (data !== undefined && typeof data.entries === 'function') {
		for (let key of data.entries()) {
			if (key[0] === 'secret') {
				decryptPass = key[1]
				data.delete(key[0])
			}
		}
	}
	if (params.token) {
		token = String(params.token.accessToken)
		decryptPass = String(params.token.key)
		params['token'] = token
	} else if (params.tok) {
		decryptPass = String(params.tok)
	}
	return new Promise((resolve, reject) => {
		window.$.ajax({
			type: 'POST',
			url: `${REACT_APP_DOMAIN}${url}`,
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
			if (response.error) {
				const error = {
					status: 400,
					responseJSON: { Message: I18n.t('notifications.errorMessage') } //{ Message: response.dxn_error }
				}
				throw error
			} /*else if (!response) {
					const error = {
					status: -1,
					responseJSON: { Message: I18n.t('notifications.errorMessage') } //{ Message: I18n.t('notifications.nullResponse') }
				}
				throw error
			}*/
			log(`[POST] response to ${url}`, { response })
			if (response) {
                return response
				/*try {
					//console.log('response2', response)
					//console.log('decryptPass', decryptPass)
					var decript = await decryptPayload(response, decryptPass)
					return decript
				} catch (e) {
					log(e)
				}*/
			} else return undefined
		})
		.catch(async response => {
			log(`[!POST!] request to ${url} failed`, { response })
			//console.log('response', response)
			if (response && response.status && response.responseJSON) {
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
				}*/
				throw response
			}
		})
}
