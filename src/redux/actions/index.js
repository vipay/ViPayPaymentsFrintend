import * as auth from './auth';
import * as isFirstTime from './isFirstTime';
import * as loginPin from './loginPin';
import * as userId from './userId';
import * as contactsaved from './contactsaved';
export default {
  ...auth,
  ...isFirstTime,
  ...loginPin,
  ...userId,
  ...contactsaved,
};
