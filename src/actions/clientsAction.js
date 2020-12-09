import { post } from './util'

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
				return formatJson(result)
			})
			.catch(error => {
				return error
			})
	}
}