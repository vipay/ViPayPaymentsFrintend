import types from '../types';
const initial_state = {
  userId: '',
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case types.USER_ID: {
      const data = action.payload;
      return {
        userId: data,
      };
    }
    default: {
      return {...state};
    }
  }
}
