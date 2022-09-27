import types from '../types';
const initial_state = {
  data: [],
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case types.CONTACTSAVED: {
      const data = action.payload;
      return {
        data,
      };
    }
    default: {
      return {...state};
    }
  }
}
