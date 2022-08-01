import store from '../store';
import types from '../types';
const { dispatch } = store;

export const userId = (data) => {
    dispatch({
        type: types.USER_ID,
        payload: data,
    });
};