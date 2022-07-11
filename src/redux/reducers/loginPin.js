import types from "../types";
const initial_state = {
    screenLock: false
}
export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOGIN_PIN: {
            const data = action.payload
            return { screenLock: data };
        }
        default: {
            return { ...state }
        }
    }
}