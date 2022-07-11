import * as auth from "./auth";
import * as isFirstTime from './isFirstTime';
import * as loginPin from './loginPin'
export default {
    ...auth,
    ...isFirstTime,
    ...loginPin
}