import {Magic} from '@magic-sdk/react-native';
import {magic_live} from '../constants/constants';

// pk_live_1421890C80C60FED
export var Singleton = (function () {
  var instance;

  function createInstance() {
    var object = new Magic(magic_live);
    // object.user
    //   .logout()
    //   .then(ee => {
    //     console.log('logoutlogout/////', ee);
    //   })
    //   .catch(error => {
    //     console.log('logoutlogout/////', error);
    //   });
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
