import { Actions } from 'react-native-router-flux';

import {startLoading, stopLoading} from 'redux_manager/common_action_creator';

// Action types
export const SUCCESS = 'Success';
export const FAILED = 'Failed';

// sample user info
const userInfo = {
	trainee_id: 1,
	full_name: 'test',
	email: 'test@gmail.com',
	birthday: '1986-01-20',
	token: 'abcxyzwendsjkfjdsklfjkds'
};

// Action Creators
export function logInRequestSuccess(data){
    return {
        type: SUCCESS,
        payload: data
    }
}

export default function logInAsync(userCredentials){
    return dispatch => {
        dispatch(startLoading());
        if (userCredentials.username === 'test' && userCredentials.password === '123') {
            setTimeout(() => {
                dispatch(logInRequestSuccess(userInfo));
                dispatch(stopLoading());
                Actions.listUser();
            }, 2000);
        } else {
            setTimeout(() => {
                dispatch(logInRequestFailed({message: 'Invalid username and password.'}));
                dispatch(stopLoading());
            }, 2000);
        }
    }
}

export function logInRequestFailed(error){
    return {
        type: FAILED,
        error: error.message
    }
}