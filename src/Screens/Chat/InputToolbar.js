import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {InputToolbar, Actions, Composer, Send} from 'react-native-gifted-chat';
import {Value} from 'react-native-reanimated';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import {moderateScale} from '../../styles/responsiveSize';

// const [inputText, SetInputText] = useState([]);
export const renderInputToolbar = props => (
  <InputToolbar
    {...props}
    
    containerStyle={{
      minHeight: moderateScale(71),
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      justifyContent: 'center',
      borderTopWidth: 0,
      backgroundColor: colors.white,
      


      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    }}
    primaryStyle={{alignItems: 'center'}}
  />
);

// export const renderActions = props => {
//   console.log(props, 'props');
//   return (

//     <Actions
//     onPressActionButton={}
//       {...props}
//       containerStyle={{
//         width: 48,
//         height: 48,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: colors.Blue,
//         borderRadius: 10,
//         marginTop: moderateScale(8),
//         marginLeft: 24,
//         marginRight: 16,
//       }}
//       icon={() => <Image source={imagePath.ic_arrow_white} />}
//     />
//   );
// };

// export const renderComposer = props => {

//   return (
//     <View
//       style={{
//         backgroundColor: colors.white,
//         flexDirection: 'row',
//         borderWidth: 1,
//         borderRadius: 10,
//         borderColor: colors.F1F1F2,
//         marginRight: moderateScale(24),
//         flex: 1,
//       }}>
//       <Composer
//         {...props}
//         textInputStyle={{
//           minHeight: 48,
//           marginRight: moderateScale(24),
//           color: colors.OBSIDIAN,
//         }}
//       />
//       <Send
//         {...props}
//         alwaysShowSend
//         containerStyle={{
//           marginRight: moderateScale(16),
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Image
//           source={
//             props.text.length > 0
//               ? imagePath.ic_send_active
//               : imagePath.ic_send_inactive
//           }
//         />
//       </Send>
//     </View>
//   );
// };

export const renderSend = props => <Send disabled />;
