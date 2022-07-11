import store from '../store';
import types from '../types';
const { dispatch } = store;

export const loginPin = (data) => {
    dispatch({
        type: types.LOGIN_PIN,
        payload: data,
    });
};

