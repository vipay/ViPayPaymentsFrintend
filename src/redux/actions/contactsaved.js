import store from '../store';
import types from '../types';
const { dispatch } = store;

export const contactsaved = (data) => {
    dispatch({
        type: types.CONTACTSAVED,
        payload: data,
    });
};

