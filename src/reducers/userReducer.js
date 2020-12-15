var { domain } = window
const initialState = {
	userName: '',
	isAdmin: false,
	token: null,
	domain: domain,
	report_ID: 0,
	loading: false,
	error: null,
	showMenu: true,
	dynamicHtml: null,
	dbtoken: null,
	profile: null,
	captcha: null,
	otc_code: null,
	appConfig: [],
	permissions: [],
	actualUserInfo: [],
	producers: [],
	buyers: []
}

export default function reducer(state, action) {
	if (!state) {
		return initialState
	}
	switch (action.type) {
		case 'LOGIN_USER': {
			return { ...state, ...action.user, loading: false }
		}
		case 'SET_DOMAIN': {
			return { ...state, domain: action.payload }
		}
		case 'LOG_OUT': {
			return initialState
		}
		case 'BEGIN_LOGIN_USER': {
			return { ...state, loading: true }
		}
		case 'FAIL_LOGIN_USER': {
			return { ...state, loading: false }
		}
		case 'SET_DYNAMIC_HTML': {
			return { ...state, dynamicHtml: action.html }
		}
		case 'SET_TOK_DB': {
			return { ...state, dbtoken: action.dbtoken }
		}
		case 'SET_USER_PROFILE': {
			return { ...state, profile: action.profile }
		}
		case 'ADD_CAPTCHA': {
			return { ...state, captcha: action.payload }
		}
		case 'SET_APP_CONFIG': {
			return { ...state, appConfig: action.payload }
		}
		case 'SET_USER_PERMISSIONS': {
			return { ...state, permissions: action.payload }
		}
		case 'SET_USERNAME': {
			console.log("action.payload", action.payload)
			return { ...state, userName: action.payload }
		}
		case 'SET_USER_DATA': {
			console.log("SET_USER_DATA", action.payload)
			return { ...state, actualUserInfo: action.payload }
		}
		case 'SET_PRODUCERS': {
			console.log("action.SET_PRODUCERS", action.payload)
			return { ...state, producers: action.payload.data.productores }
		} case 'SET_BUYERS': {
			return { ...state, buyers: action.payload.data }
		}
		case 'SAVE_OTC_CODE': {
			return {
				...state,
				otc_code: action.payload
			}
		}

		default:
			return state
	}
}