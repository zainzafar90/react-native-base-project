import { Theme } from 'react-native-elements';

const theme: Theme = {
  Button: {
    titleStyle: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: 'Inter-Regular',
      fontWeight: '700',
    },
    buttonStyle: {
      padding: 17,
      borderRadius: 6,
    },
  },
  Text: {
    h1Style: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      lineHeight: 29,
    },
    h2Style: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      lineHeight: 22,
    },
  },
  Input: {
    style: {
      fontSize: 13,
      lineHeight: 16,
      fontFamily: 'Inter-Regular',
      fontWeight: '400',
      color: '#333333',
    },
    inputContainerStyle: {
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: '#ADADAD',
      backgroundColor: '#FFFFFF',
      borderRadius: 6,
    },
    placeholderTextColor: '#858585',
    disabledInputStyle: {
      borderColor: '#D6D6D6',
    },
  },
};

export default theme;
