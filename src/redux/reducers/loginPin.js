import types from "../types";
const initial_state = {
    screenLock: false,
    isShow:true
}
export default function (state = initial_state, action) {
    switch (action.type) {
        case types.LOGIN_PIN: {
            const data = action.payload
            return { 
                screenLock: data.screenLock,
                isShow:data.isShow
            };
        }
        default: {
            return { ...state }
        }
    }
}