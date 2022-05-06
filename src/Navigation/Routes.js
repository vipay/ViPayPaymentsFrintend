// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {useSelector} from 'react-redux';

// import AuthScreen from './AuthScreen';
// import MainStack from './MainStack';

// const Stack = createStackNavigator();

// export default function Routes() {
//   const userData = useSelector(state => state.auth.userData);
//   const isFirstTime = useSelector(state => state.isFirstTime.isFirstTime);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {false ? <>{MainStack(Stack)}</> : <>{AuthScreen(Stack, isFirstTime)}</>}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {createSharedElementStackNavigator, create} from 'react-navigation-shared-element';
import AuthScreen from './AuthScreen';
import MainStack from './MainStack';
import TabRoutes from './TabRoutes';
const Stack = createStackNavigator();
// const Stack = createSharedElementStackNavigator();
export default function Routes() {
  const userData = useSelector(state => state.auth.userData);
  const isFirstTime = useSelector(state => state.isFirstTime.isFirstTime);
  console.log(isFirstTime, 'ghijtrsdytfuigyouyguhij');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <>{MainStack(Stack)}</>
        ) : (
          <>{AuthScreen(Stack, isFirstTime)}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}