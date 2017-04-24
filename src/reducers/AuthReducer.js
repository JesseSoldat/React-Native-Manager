import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: ''
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case EMAIL_CHANGED:
			return {...state, email: action.payload };
		case PASSWORD_CHANGED:
			return {...state, password: action.payload };
		case LOGIN_USER:
			console.log('LOGIN_USER');
			return state;
		case LOGIN_USER_SUCCESS:
			console.log('LOGIN_USER_SUCCESS');
			return state;
		case LOGIN_USER_FAIL:
			console.log('LOGIN_USER_FAIL');
			return state;
		default:
			return state;
	}
}